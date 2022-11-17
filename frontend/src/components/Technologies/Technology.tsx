

export default function Technology({technology}){
    return (
        <li key={technology.id}>
            -{technology.attributes.Name}
        </li>)
}