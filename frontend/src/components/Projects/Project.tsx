import Image from 'next/image';

export default function Project({project, IMAGE_HOST_DOMAIN}) {
    return (
        <div key={project.id}>

            <Image
                alt={`Project ${project.attributes.Title} image`}
                src={`${IMAGE_HOST_DOMAIN}${project.attributes.Image.data.attributes.formats.small.url}`}
                width={project.attributes.Image.data.attributes.formats.small.width}
                height={project.attributes.Image.data.attributes.formats.small.height}
            />
            <h3>{project.attributes.Title}</h3>
            <a href={project.attributes.Link}>link</a>
            <a href={project.attributes.Repository}>github</a>
            <p>{project.attributes.Description}</p>
        </div>
    )
}