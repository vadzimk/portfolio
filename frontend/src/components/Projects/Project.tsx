import Image from 'next/image';

export default function Project({project, IMAGE_HOST_DOMAIN}) {
    return (
        <div className="pt-14 pb-3"
             key={project.id}>
            <div className="bg-amber-200  aspect-[1.34] max-w-[648px] flex justify-end items-end">
                <div className="relative h-[90%]  aspect-[1.34] ">
                    <Image fill className=""
                        alt={`Project ${project.attributes.Title} image`}
                        src={`${IMAGE_HOST_DOMAIN}${project.attributes.Image.data.attributes.formats.small.url}`}
                        // width={project.attributes.Image.data.attributes.formats.small.width}
                        // height={project.attributes.Image.data.attributes.formats.small.height}
                    />
                </div>
            </div>
            <h3>{project.attributes.Title}</h3>
            <a href={project.attributes.Link}>link</a>
            <a href={project.attributes.Repository}>github</a>
            <p>{project.attributes.Description}</p>
        </div>
    )
}