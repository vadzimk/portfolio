import Project from '@/components/Projects/Project';
import Image from 'next/image';


export default function Projects({projects, IMAGE_HOST_DOMAIN}) {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.data
                    .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                    .map(project =>
                        <Project project={project} IMAGE_HOST_DOMAIN={IMAGE_HOST_DOMAIN}/>
                    )}
            </ul>
        </div>
    )
}