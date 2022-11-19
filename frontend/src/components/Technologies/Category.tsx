import Technology from '@/components/Technologies/Technology';

export default function Category({categ}){
    return(
        <div className="pt-14 pb-3  ">
            <div className="accent-text uppercase">
                {categ.attributes.Name}
            </div>
            <ul className="ml-8 sm:ml-0 pt-3 mt-3 sm:mt-11 border-t border-gray500 sm:border-t-0 sm:grid sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8">{categ.attributes.technologies.data
                .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                .map(technology =>
                    <Technology key={technology.id} technology={technology}/>
                )}</ul>
        </div>
    )
}