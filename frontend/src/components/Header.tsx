import Image from 'next/image';
import logoSvg from '../../public/logo.svg'
import {navlinks} from '@/components/navlinks';

export default function Header() {

    return (
        <div>
            <Image src={logoSvg} alt="logo"/>
            {
                navlinks.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}

        </div>
    )
}