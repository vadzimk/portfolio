import Project from '@/components/Projects/Project';


export default function Projects({projects}) {
    return (
        <div>
            {projects.map(pj =>
                <Project/>
            )}
        </div>
    )
}