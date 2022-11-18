import Image from 'next/image';
import logoSvg from '../../public/logo.svg'
import {navlinks} from '@/components/navlinks';
import {useState} from 'react';
import Link from 'next/link'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full h-[73px] bg-gray100cold opacity-80 backdrop-blur-[2px]">
            <div className="mx-4 flex pt-4 justify-between">
                <div className="flex flex-col justify-end">
                    <Image src={logoSvg} alt="logo" className="w-[93px] h-[25px]"/>
                </div>
                <div className="sm:hidden"> {/*sandwich*/}
                    <button type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="block text-gray900 focus:text-accent1 focus:outline-none hover:text-gray500">
                        <svg viewBox="0 0 100 80" className="w-10 h-10 fill-current ">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </button>
                </div>

            </div>
            {/*<!-- !isOpen && className="hidden" -->*/}
            <nav className="py-3 sm:flex">
                {
                    navlinks.map(item => (
                        <div
                            className="block px-2 py-4 odd:bg-[#F4F8FB] hover:bg-gray300"
                            key={item.id}>
                            <Link className="block font-semibold text-end pr-2"
                                  href="#">{item.name}</Link>
                        </div>


                    ))}


                {/*<div className="relative sm:ml-3">*/}
                {/*    <button className="z-10 relative block h-10 w-10 object-cover rounded-full overflow-hidden border-2 border-gray-300 focus:border-white focus:outline-none">*/}
                {/*        <img className="h-full w-full" src="./img/kittin-logo.jpg"/>*/}
                {/*    </button>*/}
                {/*    /!*<!--   onClick={ ()=>setIsOpen(false) }         -->*/}
                {/*    <!--*/}
                {/*        useffect(()=>{*/}
                {/*                const handleEscape=(e)=>{*/}
                {/*                    if (e.key==='Esc' || e.key==='Escape')*/}
                {/*                        setIsOpen(false)*/}
                {/*                }*/}
                {/*                document.setEventListener('keydown', handleEscape)*/}
                {/*                return ()=>document.removeEventListener('keydown', handleEscape)*/}
                {/*    })*/}
                {/*    -->*!/*/}
                {/*    <button tabindex="-1" className="fixed inset-0 bg-black opacity-50 h-full w-full cursor-default "></button>*/}
                {/*    /!*<!--  isOpen &&     onClick={ ()=>setIsOpen(!isOpen) }        -->*!/*/}
                {/*    <div className="absolute right-0 bg-white rounded-lg py-2 w-48 mt-2 shadow-xl">*/}
                {/*        <a className="block px-4 py-2 hover:bg-indigo-400 hover:text-white" href="#">Account settings</a>*/}
                {/*        <a className="block px-4 py-2 hover:bg-indigo-400 hover:text-white" href="#">Support</a>*/}
                {/*        <a className="block px-4 py-2 hover:bg-indigo-400 hover:text-white" href="#">Sign out</a>*/}
                {/*    </div>*/}


                {/*</div>*/}
            </nav>

            <div className="hidden"> {/*desktop menu*/}
                {
                    navlinks.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))}
            </div>
        </header>
    )
}