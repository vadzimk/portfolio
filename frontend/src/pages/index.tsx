import Head from 'next/head'

import axios from 'axios';
import Image from 'next/image';


export async function getStaticProps() {
    const BASE_URL = process.env.BASE_URL
    const IMAGE_HOST_DOMAIN = process.env.IMAGE_HOST_DOMAIN
    try {
        const homepage = await axios.get(`${BASE_URL}/api/homepage?populate=Avatar`)
        const technologies = await axios.get(`${BASE_URL}/api/specialisations?populate=technologies`)
        const projects = await axios.get(`${BASE_URL}/api/projects?populate=Image`)
        return {
            props: {
                homepageData: homepage.data,
                IMAGE_HOST_DOMAIN,
                technologies: technologies.data,
                projects: projects.data
            }
        }
    } catch (e) {
        console.log(e)
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
                <h1 className="text-3xl font-bold underline">
                    {heading}
                </h1>
                {/*<Image src={`${IMAGE_HOST_DOMAIN}` + avatar.data.attributes.url}*/}
                {/*     alt={avatar.data.attributes.alternativeText}*/}
                {/*     width={avatar.data.attributes.width}*/}
                {/*     height={avatar.data.attributes.height}*/}
                {/*/>*/}

                <h2>Technologies I use</h2>
                <ul>
                    {technologies.data
                        .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                        .map(specialisation =>
                            <li
                                key={specialisation.id}>{specialisation.attributes.Name}
                                <ul>{specialisation.attributes.technologies.data
                                    .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                                    .map(technology =>
                                        <li key={technology.id}>-{technology.attributes.Name}</li>
                                    )}</ul>
                            </li>)}
                </ul>
                <h2>Projects</h2>
                <ul>
                    {projects.data
                        .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                        .map(project =>
                            <div key={project.id}>

                                <Image
                                    alt={`Project ${project.attributes.Title} image`}
                                    src={`${IMAGE_HOST_DOMAIN}${project.attributes.Image.data.attributes.formats.small.url}`}
                                    width={project.attributes.Image.data.attributes.formats.small.width}
                                    height={project.attributes.Image.data.attributes.formats.small.height}
                                    />
                                <h3>{project.attributes.Title}</h3>
                                <a href={project.attributes.Link}>link</a>
                                <a href={project.attributes.Repository}>github</a>
                                <p>{project.attributes.Description}</p>
                            </div>
                        )}
                </ul>
                <h2>Contact me</h2>
            </main>
            <footer>
            </footer>
        </div>
    )
}
