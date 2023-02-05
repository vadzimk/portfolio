
// https://jakearchibald.github.io/svgomg/
const LinkSvg = ({addClassName}) => <svg width="36" height="36" fill="none" className={`${addClassName} fill-current`}>
    <g clipPath="url(#a)">
        <path fillRule="evenodd"
              d="M1.81 36h32.3a1.81 1.81 0 0 0 1.81-1.82V18a.5.5 0 0 0-.5-.5.51.51 0 0 0-.5.5v16.18a.81.81 0 0 1-.81.81H1.81a.81.81 0 0 1-.81-.81V1.81A.81.81 0 0 1 1.81 1h16.08a.5.5 0 0 0 0-1H1.81A1.81 1.81 0 0 0 0 1.81v32.37A1.81 1.81 0 0 0 1.81 36ZM35.87 8.37V2.56a2.501 2.501 0 0 0-2.5-2.51h-5.8a2.502 2.502 0 0 0-.21 5L15.89 16.54a2.5 2.5 0 0 0 3.54 3.53L30.87 8.6a2.502 2.502 0 1 0 5-.23Z"
              clipRule="evenodd"/>
    </g>
    <defs>
        <clipPath id="a">
            <path fill="none" d="M0 0h36v36H0z"/>
        </clipPath>
    </defs>
</svg>

const LinkGithubThin = ({addClassName}) => <svg width="36" height="36" fill="none"
                                                className={`${addClassName} fill-current`}>
    <path
        d="M17.986 0h15.796C35.142 0 36 .857 36 2.221v31.565C36 35.129 35.142 36 33.817 36H2.183C.872 36 0 35.129 0 33.814V2.18C0 .864.872 0 2.183 0h15.803Zm-2.587 26.286a1.665 1.665 0 0 0-.22-.05c-1.048-.179-2.069-.436-3.04-.915-2.133-1.064-3.408-2.764-3.628-5.15-.106-1.164-.035-2.357.057-3.528.106-1.307.475-2.543 1.46-3.507.077-.079.085-.307.042-.443-.44-1.236-.397-2.472-.014-3.714.149-.472.17-.479.652-.315.843.279 1.53.786 2.112 1.443.312.35.602.722.843 1.014.496-.185.942-.407 1.417-.514 1.538-.357 3.097-.3 4.656-.207.971.057 1.928.193 2.736.779.354-.422.687-.85 1.063-1.243.58-.607 1.261-1.072 2.076-1.307.262-.079.44-.043.539.264.404 1.271.474 2.55-.015 3.807-.099.25-.042.4.12.557.639.614.986 1.386 1.177 2.236a14.24 14.24 0 0 1 .241 4.9c-.212 1.707-1.006 3.121-2.388 4.178-1.14.879-2.452 1.35-3.855 1.593-.206.036-.404.079-.63.122.595.864.8 1.793.814 2.771.021 1.836.007 3.664.007 5.5v.457h12.154c.843 0 1.254-.421 1.254-1.278V2.27c0-.85-.418-1.264-1.261-1.264C23.244 1 12.748 1 2.246 1 1.403 1 .992 1.414.992 2.271v31.465c0 .85.411 1.271 1.262 1.271h12.288v-3.386c-.411.043-.801.108-1.184.129-2.076.121-3.734-.614-4.755-2.493-.701-1.286-1.31-2.614-2.565-3.471-.064-.043-.149-.186-.12-.229.042-.078.155-.164.24-.171.326-.007.666-.029.985.035.95.193 1.58.815 2.12 1.6.36.529.765 1.079 1.268 1.465 1.12.857 2.41.95 3.741.557.199-.057.305-.15.333-.386.071-.836.234-1.65.794-2.371Z"/>
</svg>


export function DescriptionSection({project}){
    const linkStyle = `block shadow-md focus:shadow-inner hover:shadow-lg`
    const headerTextColorClass = "text-gray-700 dark:text-gray100"
    return (
        <div className={`flex flex-col justify-start sm:justify-between`}>
            {/*description*/}
            <div className="py-7 md:py-14 px-6 md:px-12 max-w-[648px]">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center">
                        <h3 className="lowercase text-gray-700 dark:text-gray100">{project.attributes.Title}</h3>
                    </div>
                    <div className="flex justify-between gap-6">
                        {project.attributes.Link
                            && <a className={linkStyle}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={project.attributes.Link}>
                            <LinkSvg addClassName={headerTextColorClass}/>
                          </a>}
                        {project.attributes.Repository
                            && <a className={linkStyle}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={project.attributes.Repository}>
                            <LinkGithubThin addClassName={headerTextColorClass}/>
                          </a>}
                    </div>
                </div>
                <div className="pt-3 decorate-list min-h-[200px]"
                     dangerouslySetInnerHTML={{__html: project.attributes.Description}}
                />
            </div>
        </div>
    )
}