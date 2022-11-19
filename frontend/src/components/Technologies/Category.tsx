import Technology from '@/components/Technologies/Technology';

export default function Category({categ}){
    return(
        <div className="pt-14 pb-3 border-b-2 border-gray500">
            <div className="accent-text uppercase">
                {categ.attributes.Name}
            </div>
            <ul className="ml-8 pt-3 mt-3 border-t border-gray500">{categ.attributes.technologies.data
                .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                .map(technology =>
                    <Technology key={technology.id} technology={technology}/>
                )}</ul>
        </div>
    )
}