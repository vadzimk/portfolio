import Image from 'next/image';
import logoSvg from '../../public/logo.svg'
import {navlinks} from '@/components/navlinks';
import Link from 'next/link'
import useComponentVisible from '@/hooks/useComponentVisible';
import {useTheme} from 'next-themes';

const sunIcon = (
    <svg width="27" height="27" viewBox="0 0 27 27" className="fill-current w-[24px] h-[24px]">
        <path
              d="M13.5 19.125a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM23.625 14.625H22.5a1.125 1.125 0 1 1 0-2.25h1.125a1.125 1.125 0 1 1 0 2.25Zm-19.125 0H3.375a1.125 1.125 0 1 1 0-2.25H4.5a1.125 1.125 0 1 1 0 2.25Zm15.367-6.367a1.125 1.125 0 0 1-.742-.327 1.125 1.125 0 0 1 0-1.586l.799-.799a1.125 1.125 0 1 1 1.586 1.587l-.799.798a1.124 1.124 0 0 1-.843.327ZM6.345 21.78a1.124 1.124 0 0 1-.799-.326 1.125 1.125 0 0 1 0-1.587l.799-.742a1.125 1.125 0 0 1 1.586 1.586l-.798.799c-.219.187-.5.284-.788.27ZM13.5 5.625A1.125 1.125 0 0 1 12.375 4.5V3.375a1.125 1.125 0 1 1 2.25 0V4.5A1.125 1.125 0 0 1 13.5 5.625Zm0 19.125a1.125 1.125 0 0 1-1.125-1.125V22.5a1.125 1.125 0 1 1 2.25 0v1.125A1.125 1.125 0 0 1 13.5 24.75ZM7.133 8.258a1.125 1.125 0 0 1-.788-.327l-.799-.798a1.125 1.125 0 0 1 1.587-1.587l.798.799a1.125 1.125 0 0 1 0 1.586 1.125 1.125 0 0 1-.798.327ZM20.654 21.78a1.125 1.125 0 0 1-.788-.326l-.742-.799a1.125 1.125 0 0 1 1.53-1.53l.799.799a1.125 1.125 0 0 1 0 1.586c-.221.19-.508.287-.799.27Z"/>
    </svg>
)
const moonIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current w-[24px] h-[24px]" >
        <path d="M20.2102 15.32C19.6264 16.7062 18.6877 17.9141 17.4885 18.8221C16.2893 19.7301 14.872 20.3061 13.3794 20.492C11.8868 20.678 10.3716 20.4673 8.9863 19.8813C7.60101 19.2953 6.39458 18.3546 5.48852 17.154C4.58247 15.9534 4.00877 14.5352 3.82521 13.0423C3.64165 11.5494 3.85471 10.0345 4.44294 8.65013C5.03116 7.26577 5.97377 6.06086 7.17584 5.15672C8.37792 4.25259 9.79701 3.68116 11.2902 3.49999C11.3938 3.48762 11.4987 3.50796 11.5901 3.55817C11.6816 3.60838 11.755 3.68594 11.8002 3.77999C11.8474 3.8723 11.8642 3.97721 11.848 4.07964C11.8318 4.18207 11.7836 4.27672 11.7102 4.34999C11.0972 4.95809 10.6124 5.6829 10.2843 6.48158C9.95628 7.28026 9.79165 8.1366 9.8002 8.99999C9.809 10.1348 10.1116 11.2481 10.6786 12.2312C11.2455 13.2143 12.0575 14.0338 13.0353 14.6098C14.0131 15.1859 15.1235 15.4988 16.2582 15.5181C17.393 15.5374 18.5133 15.2624 19.5102 14.72C19.6028 14.6722 19.7075 14.6534 19.811 14.6658C19.9144 14.6783 20.0117 14.7216 20.0902 14.79C20.1571 14.8587 20.2038 14.9445 20.2249 15.0381C20.2461 15.1316 20.241 15.2292 20.2102 15.32Z"/>
    </svg>

)
export default function Header() {

    const {ref, isVisible, setIsVisible} = useComponentVisible(false)
    const {theme, setTheme} = useTheme();

    const modeButton = (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <div className="sm:p-0 sm:flex sm:flex-col sm:gap-1 sm:justify-center sm:ml-4
                   icon-micro-interactions">
                {theme === 'dark' ? sunIcon : moonIcon}
            </div>
        </button>
    )

    return (
        <header ref={ref}
                className="fixed top-0 left-0 w-full sm:h-[73px]
                bg-gradient-to-t from-gray500/90 to-gray500/100 backdrop-blur-[2px]
                text-gray100
                dark:from-gray700/90 dark:to-gray700/100
                sm:flex sm:justify-between border-none shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
            <div className="max-w-screen-desk sm:px-4 w-full mx-auto flex flex-col justify-between sm:flex-row">
                <div className="px-4 py-4 sm:p-0 flex justify-between w-full">
                    {/*logo*/}
                    <Link className="flex flex-col justify-center" href="/">
                        <Image src={logoSvg} alt="logo" className="h-6 sm:h-7 w-auto"/>
                    </Link>
                    <div className="sm:hidden flex flex-row justify-between gap-x-10">
                        {/*Moon or Sun button*/}
                        <div className="flex flex-col justify-center">{modeButton}</div>
                        {/*hamburger*/}
                        <button type="button"
                                onClick={() => setIsVisible(!isVisible)}
                                className="block text-gray100 icon-micro-interactions">
                            <svg width="40" height="40" viewBox="0 0 32 32" className="w-8 h-8 fill-current">
                                {!isVisible ? <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M0 0H32V4H0V0ZM0 14H32V18H0V14ZM32 28H0V32H32V28Z"
                                    />
                                    : <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.9623 15.9117L0 28.8275L2.89314 31.7103L15.8555 18.7945L29.1085 32L32.0017 29.1172L18.7486 15.9117L31.8245 2.88275L28.9314 0L15.8555 13.029L3.07031 0.289698L0.177176 3.17245L12.9623 15.9117Z"
                                    />}
                            </svg>
                        </button>
                    </div>
                </div>
                {/*links*/}
                <nav className={`py-0 sm:p-0 w-full  backdrop-blur-[3px] sm:backdrop-blur-none 
                ${isVisible ? 'block' : 'hidden'} 
                sm:flex sm:justify-end`}>
                    {
                        navlinks.map(item => (
                            <div onClick={() => setIsVisible(false)}
                                 className="px-2 py-4 sm:p-0 sm:flex sm:flex-col sm:gap-1 sm:justify-center sm:ml-4
                                  dark:odd:bg-gray800/90 odd:bg-gray100/90
                                  dark:even:bg-gray700/90 even:bg-gray050/90
                                  dark:sm:even:bg-transparent sm:even:bg-transparent
                                  dark:sm:odd:bg-transparent sm:odd:bg-transparent
                                  text-gray-900 dark:text-gray-100
                                  sm:text-gray-100 sm:dark:text-gray-100"
                                 key={item.id}>
                                <Link className="block text-end pr-2 sm:pr-0"
                                      href={`#${item.id}`}>
                                    <span
                                        className="nav-text">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    {/*Moon or Sun button*/}
                    <div className="hidden sm:flex">{modeButton}</div>
                </nav>

            </div>
        </header>
    )
}