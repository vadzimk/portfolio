import Image from 'next/image';
import logoSvg from '../../public/logo.svg'
import {navlinks} from '@/components/navlinks';
import Link from 'next/link'
import useComponentVisible from '@/hooks/useComponentVisible';

export default function Header() {

    const {ref, isVisible, setIsVisible} = useComponentVisible(false)

    return (
        <header ref={ref}
                className="w-full h-[73px] bg-gray100cold opacity-80 backdrop-blur-[2px] sm:flex sm:justify-between">
            <div className="mx-4 pt-4 sm:p-0 flex justify-between">
                {/*logo*/}
                <Link className="flex flex-col justify-center" href="/">
                    <Image src={logoSvg} alt="logo" className="w-[93px] h-[25px] sm:w-[150px] sm:h-[40px]"/>
                </Link>
                {/*hamburger*/}
                <div className="sm:hidden">
                    <button type="button"
                            onClick={() => setIsVisible(!isVisible)}
                            className="block text-gray900 active:text-accent1 focus:outline-none hover:text-gray500">
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
            <nav className={`py-4 sm:p-0 sm:mx-4 ${isVisible ? 'block' : 'hidden'} sm:flex`}>
                {
                    navlinks.map(item => (
                        <div onClick={() => setIsVisible(false)}
                             className="px-2 py-2 sm:p-0 sm:flex sm:flex-col sm:justify-center sm:ml-4 odd:bg-[#F4F8FB] sm:odd:bg-transparent  "
                             key={item.id}>
                            <Link className="block font-semibold text-end pr-2"
                                  href={`#${item.id}`}>
                                <h5
                                    className=" inline-block hover:bg-gradient-to-r from-accent1 to-accent1 hover:bg-bottom hover:bg-[length:8px_10px] hover:bg-repeat-x">{item.name}</h5>
                            </Link>
                        </div>


                    ))}

            </nav>
        </header>
    )
}