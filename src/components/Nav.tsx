import { FaExternalLinkAlt } from "react-icons/fa"
import logo from "../assets/logo.png"

function Nav() {
    return (
        <header className='text-white w-full flex justify-between px-10 py-5 border-b border-gray-700'>
            <div className='flex items-center gap-3'>
                <img src={logo} alt="logo" className='text-white size-12' />
                <span className='text-xl text-white font-mono'>GitHub Finder</span>
            </div>
            <div className='flex items-center gap-5 text-lg'>
                <a href="https://github.com/amallal2004"
                    target="_blank" className='flex items-center gap-2 link-hover'>
                    <span>Author</span>
                </a>
                <a href="https://github.com/amallal2004/GitHub-Finder"
                    target="_blank" className='flex items-center gap-2 link-hover'>
                    <span>GitHub</span>
                    <FaExternalLinkAlt />
                </a>
            </div>
        </header>
    )
}

export default Nav