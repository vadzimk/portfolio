import Project from '@/components/Projects/Project';
import Image from 'next/image';


export default function Projects({projects, IMAGE_HOST_DOMAIN}) {
    return (
        <section id="projects"
             className="min-h-[calc(100vh)] bg-none">
            <div className="section-container">
                <h2>Projects</h2>
            </div>
                <ul>
                    {projects?.data
                        ?.sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                        .map(project =>
                            <Project key={project.id} project={project} IMAGE_HOST_DOMAIN={IMAGE_HOST_DOMAIN}/>
                        )}
                </ul>
        </section>
    )
}