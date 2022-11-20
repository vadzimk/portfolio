

export default function Technology({technology}){
    return (
        <li className="block  h-10 flex items-center sm:border-t sm:border-r sm:border-gray300 sm:justify-center"
            key={technology.id}>
            {technology.attributes.Name}
        </li>)
}