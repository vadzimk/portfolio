import Project from '@/components/Projects/Project';


export default function Projects({projects}) {
    return (
        <section id="projects"
             className="min-h-[calc(100vh)] bg-none">
            <div className="section-container">
                <h2>Projects</h2>
            </div>
                <ul className="pt-28 pb-28 flex flex-col gap-28">
                    {projects?.data
                        ?.sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                        .map(project =>
                            <Project key={project.id} project={project}/>
                        )}
                </ul>
        </section>
    )
}