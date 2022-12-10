import logoSvg from '../../public/logo-colourful.svg'
import githubThick from '../../public/linkedin-thick.svg'
import linkedinThick from '../../public/github-thick.svg'
import Image from 'next/image'
import {navlinks} from '@/components/navlinks';

export default function Footer() {
    return (
        // TODO delete display none
        <div style={{display: "none"}} >
            <Image src={logoSvg} alt="logo" className=" h-[25px] sm:h-[40px] w-auto"/>
            <div>
                <Image src={linkedinThick} alt="vadzim linkedin page"/>
                <Image src={githubThick} alt="vadzim github page"/>
            </div>
            <div>
                {
                    navlinks.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))}
            </div>
        </div>
    )
}