import Layout from "@/components/layout";
import Head from "next/head";
import {TOKEN, DATABASE_ID} from '../config'
import ProjectItem from "../components/projects/projects-item"

export default function Projects({projects}){

    console.log(projects)

    return(
        <div>
            <Layout >
                <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
                
                    <Head>
                        <title>next 포폴</title>
                        <meta name="description" content="Generated by create next app" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <h1 className="text-4xl font-bold sm:text-6xl">
                        총 프로젝트 : 
                        <span className="pl-4 text-blue">{projects.results.length}개</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 py-10 gap-8">
                        {projects.results.map((aProject)=> (
                            // <h1>{aProject.properties.Name.title[0].plain_text}</h1>
                            <ProjectItem key={aProject.id} data={aProject}/>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export async function getStaticProps(){
    const options = {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization:`Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            //데이터베이스 올림차순
            sorts:[
                {
                    "property" : "Name",
                    "direction" : "ascending"
                }
            ],
            page_size: 100
        })
    };
  
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
 
    const projects = await res.json()

    // const projectNames = projects.results.map((aPorject) => (
    //     // JSON.stringify(aPorject.properties.Name.title[0].plain_text)
    //     return aPorject.properties.Name.title[0].plain_text;
    // ))
    const projectNames = projects.results.map((aProject) => {
        return aProject.properties.Name.title[0].plain_text;
    });

    console.log(`projectNames : ${projectNames}`);

    return{
        props:{projects}
    }
}