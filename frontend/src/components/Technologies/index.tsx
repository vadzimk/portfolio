import Technology from '@/components/Technologies/Technology';

export default function Technologies({technologies}) {
    return (
        <div>
            <h2>Technologies I use</h2>
            <ul>
                {technologies.data
                    .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                    .map(specialisation =>
                        <li
                            key={specialisation.id}>{specialisation.attributes.Name}
                            <ul>{specialisation.attributes.technologies.data
                                .sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                                .map(technology => <Technology key={technology.id} technology={technology}/>
                                )}</ul>
                        </li>)}
            </ul>
        </div>
    )
}