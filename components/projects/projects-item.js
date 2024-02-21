import Image from "next/image";

export default function ProjectItem({data}){

    const Title = data.properties.Name.title[0].plain_text
    const GithubLink = data.properties.Github.url
    const description = data.properties.Desc.rich_text[0].plain_text
    const imgSrc = data.cover.file.url
    const tags = data.properties.Tag.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end
    const webLink = data.properties.Web_link.url
    const pdf = data.properties.PDF.url

    const calculatedPeriod = (start, end)=> {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0],startDateStringArray[1],startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0],endDateStringArray[1],endDateStringArray[2]);

        console.log(`startDate : ${startDate}`);
        console.log(`endDate : ${endDate}`);

        const diffInMs = Math.abs(endDate - startDate);
        const result = (diffInMs / (1000 * 60 * 60 * 24))+1;

        console.log(`기간 : ${result}`);
        return result;
    }
    
    return(
        <div className="project-card" >
            {/* <Image
                className="rounded-t-xl project-card-image"
                src={imgSrc}
                alt="cover image"
                width="100" // 원하는 너비
                height="100" // 원하는 높이
                layout="responsive"
                objectFit="cover"
                quality={100}
                //next.js에서 이미지 같은거 끌어올때는 도메인 설정 되어 있어야함 -> next.config.js 가서 images 있는거 참고하세요
            /> */}
          
            <div className="p-4 flex flex-col ">
                <h1 className="text-2xl font-bold">{Title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={GithubLink}>깃허브 바로가기</a>
                <a href={webLink}>페이지 바로가기</a>
                <a href={pdf}>PDF</a>
                <p className="my-1">
                    작업 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                
                <div className="flex items-start mt-2 flex-wrap ">
                    {tags.map((aTag)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 mb-2" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}