import {navlinks} from '@/components/navlinks';
import Link from 'next/link';

const GithubIcon = ({addClassName}) => <svg width="49" height="48" viewBox="0 0 49 48" fill="none"
                        className={`${addClassName} fill-current w-9 h-9 drop-shadow-lg hover:drop-shadow-md`}>
    <path
        d="M44.25 0h-40c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4Zm-15.6 29c.6.5 1 2.2 1 3v7h-8v-4c-5.5 1.2-7-3-7-3-1-2-2-3-2-3-2-1.2 0-1 0-1 2 0 3 2 3 2 1.8 3 4.9 2.5 6 2 0-1 .4-2.5 1-3-4.4-.5-8-3-8-8s1-6 2-7c-.2-.5-1-2.3 0-5 0 0 2 0 4 3 1-1 4-1 5-1s4 0 5 1c2-3 4-3 4-3 1.1 2.7.2 4.5 0 5 1 1 2 2 2 7s-3.6 7.5-8 8Z"/>
</svg>

const LinkedinIcon = ({addClassName}) => <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                          className={`${addClassName} fill-current w-9 h-9 drop-shadow-lg hover:drop-shadow-md`}>
    <path fillRule="evenodd"
          d="M42.138 0A5.863 5.863 0 0 1 48 5.863v36.274A5.863 5.863 0 0 1 42.138 48H5.861A5.863 5.863 0 0 1 0 42.137V5.863A5.863 5.863 0 0 1 5.862 0h36.276ZM15.044 39.686V18.521H8.006v21.165h7.038Zm25.362 0V27.554c0-6.501-3.468-9.527-8.1-9.527-3.731 0-5.406 2.05-6.337 3.495v-2.995h-7.032c.094 1.988 0 21.166 0 21.166h7.032V27.866c0-.631.043-1.262.231-1.719.506-1.262 1.669-2.575 3.606-2.575 2.544 0 3.563 1.944 3.563 4.788v11.326h7.037ZM11.575 8.32c-2.406 0-3.981 1.581-3.981 3.657 0 2.031 1.525 3.656 3.887 3.656h.044c2.45 0 3.981-1.625 3.981-3.656-.043-2.076-1.525-3.65-3.931-3.657Z"
          clipRule="evenodd"/>
</svg>

export default function Footer() {
    const iconAddClass = "text-gray700 dark:text-gray100"

    return (
        // TODO delete display none
        <div className="static bottom-0 left-0 right-0 h-36">
            {/*Bottom of divider*/}
            <div className="max-w-screen-desk px-4 w-full mx-auto flex justify-between">
                <div className="flex flex-row gap-4">
                    <a
                       href="https://github.com/vadzimk"
                       title="vadzim's Github page"
                       target="_blank"
                       rel="noreferrer"

                    >
                        <GithubIcon addClassName={iconAddClass}/>
                    </a>
                    <a
                       href="https://www.linkedin.com/in/vadzim-k/"
                       title="vadzim's Linkedin page"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <LinkedinIcon addClassName={iconAddClass}/>
                    </a>
                </div>

            </div>
        </div>

    )
}