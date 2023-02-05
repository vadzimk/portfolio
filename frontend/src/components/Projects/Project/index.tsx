import ImageSection from '@/components/Projects/Project/ImageSection';
import {DescriptionSection} from '@/components/Projects/Project/DescriptionSection';


export default function Project({project}) {
    // addRootStyles puts cards image/description in a chess order, if not provided defaults to column order
    const addRootStyles = project.attributes.Priority % 2 === 0 ? 'sm:col-start-2 sm:row-start-1 sm:col-span-1' : ''
    return (
        <div className="bg-gray050 dark:bg-gray500 flex flex-col
            sm:flex-none sm:grid sm:grid-cols-2
            sm:max-w-screen-desk sm:mx-auto
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]
            ">
            <ImageSection
                project={project}
                // rootClasses={addRootStyles}
            />
            <DescriptionSection project={project}/>
        </div>
    )
}