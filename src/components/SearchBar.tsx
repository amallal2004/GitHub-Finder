import { CiSearch } from "react-icons/ci";
import { IoEnter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Suggetions from "./Suggetions";

function SearchBar() {
    return (
        <div className="flex flex-col w-3xl">
            <div className={`flex items-center justify-between text-gray-500 w-full border border-gray-800 border-2 rounded-lg px-5 py-4 font-mono hover:shadow-lg hover:text-gray-300 transition-colors duration-200 ease-in-out focus-within:border-primary focus-within:text-white focus-within:outline-none focus-within:shadow-lg focus-within:shadow-primary/10`}>
                <div className='flex items-center gap-2 flex-1'>
                    <CiSearch className='' />
                    <input type="text" placeholder="Search GitHub username..." className='flex-1 bg-transparent outline-none' />
                </div>
                <button className='flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 ease-in-out'>
                    <IoClose className="mr-5" />
                    <span className="text-xs">Press Enter</span>
                    <IoEnter className="text-xl" />
                </button>
            </div>
            <Suggetions />
        </div>
    )
}

export default SearchBar
