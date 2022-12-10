import Image from 'next/image';
import logoSvg from '../../public/logo-colourful.svg'
import {navlinks} from '@/components/navlinks';
import Link from 'next/link'
import useComponentVisible from '@/hooks/useComponentVisible';

export default function Header() {

    const {ref, isVisible, setIsVisible} = useComponentVisible(false)


    return (
        <header ref={ref}
                className="fixed top-0 left-0 w-full h-[73px] bg-gradient-to-t from-white/90 to-white/100 backdrop-blur-[2px] sm:flex sm:justify-between border-none shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
            <div className="max-w-screen-desk sm:px-4 w-full mx-auto flex flex-col justify-between sm:flex-row">
                <div className="px-4 py-4 sm:p-0 flex justify-between w-full">
                    {/*logo*/}
                    <Link className="flex flex-col justify-center" href="/">
                        <Image src={logoSvg} alt="logo" className="h-[25px] sm:h-[40px] w-auto"/>
                    </Link>
                    {/*hamburger*/}
                    <div className="sm:hidden">
                        <button type="button"
                                onClick={() => setIsVisible(!isVisible)}
                                className="block text-gray500 active:text-accent1 focus:outline-none hover:text-gray900">
                            <svg width="40" height="40" viewBox="0 0 40 40" className="w-10 h-10 fill-current ">
                                {!isVisible ? <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M0 0H40V6H0V0ZM0 16H40V22H0V16ZM40 32H0V38H40V32Z"/>
                                    : <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.7573 18.2426L3.99996 30L8.24261 34.2426L20 22.4853L32.0416 34.5269L36.2842 30.2843L24.2426 18.2426L36.5269 5.95837L32.2842 1.71573L20 14L7.99996 2L3.75732 6.24264L15.7573 18.2426Z"/>}
                            </svg>
                        </button>
                    </div>
                </div>
                {/*links*/}
                <nav className={`py-0 sm:p-0 w-full bg-white/90 backdrop-blur-[3px] sm:backdrop-blur-none 
                ${isVisible ? 'block' : 'hidden'} 
                sm:flex sm:justify-end`}>
                    {
                        navlinks.map(item => (
                            <div onClick={() => setIsVisible(false)}
                                 className="px-2 py-4 sm:p-0 sm:flex sm:flex-col sm:gap-1 sm:justify-center sm:ml-4
                                  odd:bg-gray100cold/90 sm:odd:bg-transparent
                                  even:bg-gray100warm/90 sm:even:bg-transparent
                                  "
                                 key={item.id}>
                                <Link className="block text-end pr-2 sm:pr-0"
                                      href={`#${item.id}`}>
                                    <span
                                        className="font-light text-md uppercase inline-block hover:bg-gradient-to-r from-accent1 to-accent1 hover:bg-bottom hover:bg-[length:8px_6px] hover:bg-repeat-x">{item.name}</span>
                                </Link>
                            </div>


                        ))}

                </nav>
            </div>
        </header>
    )
}