import Animation from '@/components/home/animation'
import Link from 'next/link'

export default function Hero(){
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요!
                </h1>
                <p className='sm:text-4xl mb-2 font-small text-gray-600 font-bold' style={{fontSize:"30px"}}>
                    개발과 지식의 성장을 즐기는 개발자 제갈민혁 입니다.
                </p>

                <div className="mb-8 leading-relaxed">
                    {/* 경력사항 작성 */}
                    <ul>
                        <li className='mb-2'>2022.01 ~ 2022.02 : (재)서울의과학연구소(인턴)</li>
                        <li className='mb-2'>2023.07 ~ 2023.12 : (디지털컨버전스)공공데이터 융합 자바개발자 양성과정A30(9) 수료</li>
                        <li className='mb-2'>2024.02 : 세명대학교 정보통신학부 졸업</li>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <Link href="projects">
                        <button className="btn-project">
                            프로젝트 보러가기
                        </button>
                    </Link>
                </div>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
        
    )
}