import {navlinks} from '@/components/navlinks';
import Link from 'next/link';

const logoSvg = <svg width="173" height="47" viewBox="0 0 173 47" fill="none"
                     className="text-gray800 fill-current h-6 sm:h-8 w-auto">
    <g  >
        <path d="M124.14 8.2h.06a3.496 3.496 0 0 1 1.14-2.69 3.759 3.759 0 0 1 2.76-1.14 3.806 3.806 0 0 1 2.79 1.08A3.67 3.67 0 0 1 132 8.2a3.772 3.772 0 0 1-1.15 2.8 3.694 3.694 0 0 1-2.75 1.14 3.75 3.75 0 0 1-2.82-1.2 3.714 3.714 0 0 1-1.14-2.74ZM162.14 45.41V29.27c0-2.54-.293-4.3-.88-5.28A3.671 3.671 0 0 0 158 22.5c-2 0-3.32.67-4.06 2-.74 1.33-1.13 4.11-1.13 8.35v12.56h-10.12V29.27c0-2.64-.33-4.42-1-5.33a3.5 3.5 0 0 0-3.25-1.44c-2 0-3.377.667-4.13 2-.76 1.33-1.15 4.13-1.15 8.41v12.5h-10.1V15.82h10.25V21a13.401 13.401 0 0 1 4.28-4.6 10.32 10.32 0 0 1 5.68-1.5 11.57 11.57 0 0 1 5.95 1.38 8.047 8.047 0 0 1 3.25 4.19 11.159 11.159 0 0 1 4.24-4.19 12.88 12.88 0 0 1 10.48-.5 9 9 0 0 1 3.38 2.7 7.857 7.857 0 0 1 1.56 3.25c.364 2.018.512 4.07.44 6.12v17.56h-10.43ZM62.32 15.82v29.59h-9.61v-4.8a14 14 0 0 1-4.64 4.51 12.11 12.11 0 0 1-6 1.43 11.52 11.52 0 0 1-9.45-4.33 15.128 15.128 0 0 1-2.64-5 22 22 0 0 1-.9-6.54c0-4.84 1.237-8.677 3.71-11.51a12.58 12.58 0 0 1 9.95-4.25 10.91 10.91 0 0 1 5.73 1.44 11.53 11.53 0 0 1 4.16 4.38v-4.92h9.69Zm-9.2 14.78a7.56 7.56 0 0 0-1.84-5.44 6.5 6.5 0 0 0-5-2 6.4 6.4 0 0 0-5 2 7.84 7.84 0 0 0-1.87 5.5 7.66 7.66 0 0 0 1.87 5.47 6.399 6.399 0 0 0 5 2 6.59 6.59 0 0 0 5-2 7.63 7.63 0 0 0 1.84-5.53Z"/>
        <path d="M95.53 0v45.41h-9.61v-4.8a13.61 13.61 0 0 1-4.51 4.45 10.07 10.07 0 0 1-5.51 1.49 12.39 12.39 0 0 1-9.9-4.33c-2.473-2.893-3.707-6.753-3.7-11.58 0-4.667 1.24-8.483 3.72-11.45a12 12 0 0 1 9.55-4.31 11.89 11.89 0 0 1 6.09 1.38 12.33 12.33 0 0 1 4.22 4.5c-.08-.53-.15-1.33-.23-2.4-.08-1.07-.12-2.13-.12-2.88V0h10Zm-9.26 30.66a7.74 7.74 0 0 0-1.79-5.44 6.66 6.66 0 0 0-5-2 6.46 6.46 0 0 0-5 2 7.77 7.77 0 0 0-1.81 5.44 7.82 7.82 0 0 0 1.81 5.47 6.45 6.45 0 0 0 5 2 6.66 6.66 0 0 0 5-2 7.79 7.79 0 0 0 1.79-5.47Z"/>
        <path d="M129.17 30.77 108 46.22a2.002 2.002 0 0 1-2.849-.532 2.003 2.003 0 0 1-.321-1.018l-.61-22.9-10.74 7.86L89 23.48l20.61-15.06a2 2 0 0 1 3.18 1.58v22.79l11.64-8.5 4.74 6.48ZM12.21 45.41.18 18.64A2 2 0 0 1 2 15.82h8.05l5.06 13.1c.07.15.13.303.18.46.5 1.349.902 2.733 1.2 4.14.273-1.31.654-2.594 1.14-3.84.116-.247.216-.5.3-.76l5-13.1h7.77a2 2 0 0 1 1.82 2.82L20.39 45.41h-8.18Z"/>
    </g>


</svg>


const githubIcon = <svg width="49" height="48" viewBox="0 0 49 48" fill="none"
                        className="text-gray800 fill-current w-9 h-9 drop-shadow-lg hover:drop-shadow-md">
    <path
        d="M44.25 0h-40c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4Zm-15.6 29c.6.5 1 2.2 1 3v7h-8v-4c-5.5 1.2-7-3-7-3-1-2-2-3-2-3-2-1.2 0-1 0-1 2 0 3 2 3 2 1.8 3 4.9 2.5 6 2 0-1 .4-2.5 1-3-4.4-.5-8-3-8-8s1-6 2-7c-.2-.5-1-2.3 0-5 0 0 2 0 4 3 1-1 4-1 5-1s4 0 5 1c2-3 4-3 4-3 1.1 2.7.2 4.5 0 5 1 1 2 2 2 7s-3.6 7.5-8 8Z"/>
</svg>

const linkedinIcon = <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                          className="text-gray800 fill-current w-9 h-9 drop-shadow-lg hover:drop-shadow-md">
    <path fillRule="evenodd"
          d="M42.138 0A5.863 5.863 0 0 1 48 5.863v36.274A5.863 5.863 0 0 1 42.138 48H5.861A5.863 5.863 0 0 1 0 42.137V5.863A5.863 5.863 0 0 1 5.862 0h36.276ZM15.044 39.686V18.521H8.006v21.165h7.038Zm25.362 0V27.554c0-6.501-3.468-9.527-8.1-9.527-3.731 0-5.406 2.05-6.337 3.495v-2.995h-7.032c.094 1.988 0 21.166 0 21.166h7.032V27.866c0-.631.043-1.262.231-1.719.506-1.262 1.669-2.575 3.606-2.575 2.544 0 3.563 1.944 3.563 4.788v11.326h7.037ZM11.575 8.32c-2.406 0-3.981 1.581-3.981 3.657 0 2.031 1.525 3.656 3.887 3.656h.044c2.45 0 3.981-1.625 3.981-3.656-.043-2.076-1.525-3.65-3.931-3.657Z"
          clipRule="evenodd"/>
</svg>

export default function Footer() {
    return (
        // TODO delete display none
        <div className="flex flex-col gap-4 static bottom-0 left-0 right-0">
            {/*Top of divider*/}
            <div className="pt-24 max-w-screen-desk px-4 w-full mx-auto ">
                <div className="w-full">
                    <Link title="Home" href="/">{logoSvg}</Link>
                </div>
            </div>
            {/*Divider*/}
            <div className="h-1 bg-gradient-to-r from-gray800 to-primary2 top-36 left-0 right-0 z-10"/>
            {/*Bottom of divider*/}
            <div className="max-w-screen-desk px-4 w-full mx-auto pb-24 flex justify-between">
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                       href="https://github.com/vadzimk"
                       title="vadzim's Github page"
                       target="_blank"
                       rel="noreferrer"

                    >
                        {githubIcon}
                    </a>
                    <a
                       href="https://www.linkedin.com/in/vadzim-k/"
                       title="vadzim's Linkedin page"
                       target="_blank"
                       rel="noreferrer"
                    >
                        {linkedinIcon}
                    </a>
                </div>
                <ul className="flex flex-col items-end">
                    {
                        navlinks.map(item => (
                            <Link
                                className="font-light text-sm uppercase pt-4 first:pt-0"
                                key={item.id}
                                href={`#${item.id}`}>
                                {item.name}</Link>
                        ))}
                </ul>
            </div>
        </div>

    )
}