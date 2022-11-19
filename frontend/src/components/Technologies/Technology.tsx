

export default function Technology({technology}){
    return (
        <li className="block  h-9 flex items-center"
            key={technology.id}>
            {technology.attributes.Name}
        </li>)
}