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
    const headingHtml = await mdToHtml(homepageData?.data.attributes.Heading)
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
            avatar: homepageData?.data.attributes.Avatar || null,
            IMAGE_HOST_DOMAIN: process.env.IMAGE_HOST_DOMAIN,
            technologies: await getTechnologiesData() || null,
            projects: projects || null,
        }
    }
}

export default function Home({headingHtml, avatar, IMAGE_HOST_DOMAIN, technologies, projects}) {
    console.log("headingHtml", headingHtml)
    return (
        <div>
            <Head>
                <title>Vadzim's portfolio</title>
            </Head>

            <main>
                <div className="h-[calc(100vh)] bg-gray100cold relative">
                    <Image
                        className="opacity-50 absolute left-[calc(35vw)] -top-[378px] md:translate-y-[198px] min-w-[605px] h-[609px]"
                        src={Triangle} alt=""/>
                    <div className="h-[calc(100vh)] max-w-screen-desk mx-auto flex flex-col"> {/*bg-green-100*/}
                        <div className="z-20">
                            <Header/>
                        </div>
                        <div className="flex flex-col justify-center grow ">
                            <div
                                className="flex flex-col md:flex-row md:justify-between  relative mx-4"> {/*Hero message, avatar, deco-square*/}
                                <section className="flex flex-col justify-end">
                                    <div className="z-10"
                                         dangerouslySetInnerHTML={{__html: headingHtml}}
                                    />
                                </section>
                                <div className="shrink-0 flex md:flex-col justify-end z-10">
                                    {avatar?.data && <Image
                                        className="w-[200px] md:w-[300px] rounded-full shadow-[2px_4px_10px_-2px_rgba(0,0,0,0.05)]"
                                        src={`${IMAGE_HOST_DOMAIN}` + avatar.data.attributes.url}
                                        alt={avatar.data.attributes.alternativeText}
                                        width={avatar.data.attributes.width}
                                        height={avatar.data.attributes.height}
                                    />}
                                </div>
                                <Image src={Square} alt="" width={813} height={792}
                                       className=" opacity-50 absolute min-w-[813px] -left-[calc(813px-216px)] md:-left-[calc(813px-216px)] lg:-left-[calc(813px-102px)] -bottom-[calc(792px-417px)] md:-bottom-[calc(792px-121px)]"/>
                            </div>
                        </div>

                    </div>
                </div>


                <Technologies technologies={technologies}/>
                <Projects projects={projects} IMAGE_HOST_DOMAIN={IMAGE_HOST_DOMAIN}/>
            </main>
            <div className="min-h-[calc(100vh)] bg-gray100cold">
                <Contact/>
                <Footer/>

            </div>
        </div>
    )
}
