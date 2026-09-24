import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
function Nav() {
    return (
        <header className='text-white w-full flex justify-between px-10 py-5 border-b border-gray-700'>
            <div className='flex items-center gap-5'>
                <FaGithub className='text-white size-[36px]' />
                <span className='text-xl text-white'>GitHub Finder</span>
            </div>
            <div className='flex items-center gap-5 text-lg'>
                <span className='link-hover'>About</span>
                <a href=""
                    target="_blank" className='flex items-center gap-2 link-hover'>
                    <span>GitHub</span>
                    <FaExternalLinkAlt />
                </a>
            </div>
        </header>
    )
}

export default Nav