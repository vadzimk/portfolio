import ImageSection from '@/components/Projects/Project/ImageSection';
import {DescriptionSection} from '@/components/Projects/Project/DescriptionSection';


export default function Project({project}) {

    return (
        <div className="bg-gray050 dark:bg-gray500 flex flex-col sm:flex-none sm:grid sm:grid-cols-2
            sm:max-w-screen-desk sm:mx-auto
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]
            ">
            <ImageSection project={project}/>
            <DescriptionSection project={project}/>
        </div>
    )
}
// linear-gradient(4.04deg, rgba(199, 229, 252, 0.6) 38.41%, rgba(47, 234, 168, 0.136) 149.13%)