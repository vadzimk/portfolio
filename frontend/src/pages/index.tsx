import Head from 'next/head'
import Image from 'next/image';
import {getHomepageData, getProjectsData, getTechnologiesData} from '@/services/cmsDataService';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Square from '../../public/Square.svg'
import Triangle from '../../public/Triangle.svg'
import {mdToHtml} from '@/utils/mdToHtml';

export async function getStaticProps() {
    const homepageData = await getHomepageData()
    // Use remark to convert markdown into HTML string
    const headingHtml = await mdToHtml(homepageData?.data?.attributes.Heading)
    const projects = await getProjectsData()

    if (Array.isArray(projects?.data)) {
        // replace project's description string to contain html instead of markdown
        // foreach does not work with await
        for (let i = 0; i < projects.data.length; i++) {
            projects.data[i].attributes.Description = await mdToHtml(projects.data[i].attributes.Description)
        }
    }
    // console.log("headingHtml-->", typeof headingHtml, headingHtml )
    return {
        props: {
            headingHtml,
            avatar: homepageData?.data?.attributes.Avatar || null,
            technologies: await getTechnologiesData() || null,
            projects: projects || null,
        }
    }
}

export default function Home({headingHtml, avatar, technologies, projects}) {
    return (
        <div>
            <Head>
                <title>Vadzim's portfolio</title>
            </Head>

            <main>
                <div className="relative overflow-hidden
                bg-[url('/Dongdaemun-lg.png')] dark:bg-[url('/Dongdaemun-lg-dk.png')]
                bg-no-repeat bg:auto sm:bg-cover bg-center
                ">
                    <div className="h-[calc(100vh)] max-h-[900px] max-w-screen-desk mx-auto flex flex-col"> {/*bg-green-100*/}
                        <div className="z-20">
                            <Header/>
                        </div>
                        <div className="flex flex-col justify-center grow">
                            <div
                                className="flex flex-col md:flex-row md:justify-between relative items-center sm:mx-4"> {/*Hero message, avatar*/}
                                <section
                                    className="flex flex-col justify-end max-w-sm sm:max-w-lg bg-gray800/30 md:bg-transparent">
                                    <div className="z-10 text-gray100 p-4"
                                         dangerouslySetInnerHTML={{__html: headingHtml}}
                                    />
                                </section>
                                <div className="shrink-0 flex md:flex-col justify-end z-10">
                                    {/*{avatar?.data && <Image*/}
                                    {/*    className="w-[200px] md:w-[300px] rounded-full shadow-[2px_4px_10px_-2px_rgba(0,0,0,0.05)]"*/}
                                    {/*    src={avatar.data.attributes?.url}*/}
                                    {/*    alt={avatar.data.attributes.alternativeText}*/}
                                    {/*    width={avatar.data.attributes.width}*/}
                                    {/*    height={avatar.data.attributes.height}*/}
                                    {/*/>}*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <Technologies technologies={technologies}/>
                <Projects projects={projects}/>
            </main>
            <div className="min-h-[calc(100vh)] max-h-[900px] bg-gray100cold relative">
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}
