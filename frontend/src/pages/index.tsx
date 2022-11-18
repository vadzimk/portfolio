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

export async function getStaticProps() {
    return {
        props: {
            homepageData: await getHomepageData(),
            IMAGE_HOST_DOMAIN: process.env.IMAGE_HOST_DOMAIN,
            technologies: await getTechnologiesData(),
            projects: await getProjectsData(),
        }
    }
}

export default function Home({homepageData, IMAGE_HOST_DOMAIN, technologies, projects}) {
    const heading = homepageData.data.attributes.Heading
    const avatar = homepageData.data.attributes.Avatar

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/frontend/public/favicon.ico"/>
            </Head>

            <main>
                <div className="h-[calc(100vh)] bg-gray100cold relative">
                    <Image
                        className="absolute left-[calc(35vw)] -top-[378px] md:translate-y-[198px] min-w-[605px] h-[609px]"
                        src={Triangle} alt=""/>
                    <div className="h-[calc(100vh)] max-w-screen-desk mx-auto flex flex-col"> {/*bg-green-100*/}
                        <div className="z-10">
                            <Header/>
                        </div>
                        <div className="flex flex-col justify-center grow ">
                            <div className="flex flex-col md:flex-row  relative mx-4"> {/*Hero message, avatar, deco-square*/}
                                <div className="flex flex-col justify-end">
                                    <div className="hero-text z-10">
                                        {heading}
                                    </div>
                                </div>
                                <div className="shrink-0 flex md:flex-col justify-end z-10">
                                    <Image className="w-[200px] md:w-[300px]"
                                           src={`${IMAGE_HOST_DOMAIN}` + avatar.data.attributes.url}
                                           alt={avatar.data.attributes.alternativeText}
                                           width={avatar.data.attributes.width}
                                           height={avatar.data.attributes.height}
                                    />
                                </div>
                                <Image src={Square} alt="" width={813} height={792}
                                       className="absolute min-w-[813px] -left-[calc(813px-216px)] md:-left-[calc(813px-216px)] lg:-left-[calc(813px-102px)] -bottom-[calc(792px-417px)] md:-bottom-[calc(792px-121px)]"/>
                            </div>
                        </div>

                    </div>
                </div>


                <Technologies technologies={technologies}/>
                <Projects projects={projects} IMAGE_HOST_DOMAIN={IMAGE_HOST_DOMAIN}/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}
