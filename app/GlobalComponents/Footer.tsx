import Link from "next/link"
import { menu, socials } from './Header'

const Footer = () => {
  return (
    <footer>
        <div className="w-full bg-dark-blue py-16 tablet:flex tablet:justify-between tablet:items-center tablet:px-16 desktop:mt-16">
            <div className="footer-title mb-16 tablet:mb-0">
                <h1 className="text-center text-white font-black text-7xl mb-1 tablet:text-8xl desktop:text-9xl tablet:mb-4">Heroku</h1>
                <p className="text-center text-accent italic leading-5 text-xs tablet:text-sm tablet:text-start">Copyright © 2024 - All right reserved.</p>
            </div>
            <div className="socials">
                <div className="page-navigation flex justify-center items-start">
                    <div className="navigation mr-16">
                        <p className="title font-semibold text-sm text text-white opacity-60 mb-2">Navigation</p>
                        <nav className="text-center menu">
                            <ul className="flex flex-col justify-center items-center tablet:items-start">
                                {
                                    menu.map(item =>  
                                        <li key={item.menuTitle} className="item">
                                            <Link href={item.destination} className={`text-white font-medium ${item.menuTitle !== "Manga" && "mb-2"} hover:!text-accent`}>
                                                {item.menuTitle}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>    
                        </nav>
                    </div>
                            
                    <div className="socials">
                        <p className="title font-semibold text-sm text text-white opacity-60 mb-2">Dev Socials</p>
                        <nav className="text-center menu">
                            <ul className="flex flex-col justify-center items-center tablet:items-start">
                                {
                                    socials.map(item =>  
                                        <li key={item.menuTitle} className="item">
                                            <Link href={item.destination} className={`text-white font-medium ${item.menuTitle !== "Manga" && "mb-2 hover:!text-accent"}`}>
                                                {item.menuTitle}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>    
                    </div>  
                </div>
            </div>
        </div>
        <div className="disclaimer bg-darker-blue px-6 py-2">
            <p className="text-accent font-semibold text-xs text-center tablet:text-sm tablet:px-16">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
        </div>
    </footer>
    
  )
}

export default Footer