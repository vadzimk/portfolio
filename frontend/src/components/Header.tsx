import Image from 'next/image';
import logoSvg from '../../public/logo.svg'
import {navlinks} from '@/components/navlinks';
import {useState} from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full h-[73px] bg-gray100cold opacity-80 backdrop-blur-[2px]">
            <div className="mx-4 flex pt-4 justify-between">
                <div className="flex flex-col justify-end">
                    <Image src={logoSvg} alt="logo" className="w-[93px] h-[25px]"/>
                </div>
                <div className="sm:hidden"> {/*sandwich*/}
                    <button type="button"
                            onClick={()=>setIsOpen(!isOpen)}
                            className="block text-gray900 focus:text-accent1 focus:outline-none hover:text-gray500">
                        {/*<Image src={Hamburger} alt="menu"/>*/}
                        <svg viewBox="0 0 100 80" className="w-10 h-10 fill-current ">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </button>
                </div>
                <div className="hidden"> {/*desktop menu*/}
                    {
                        navlinks.map(item => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                </div>

            </div>
        </div>
    )
}