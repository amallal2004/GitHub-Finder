import { CiSearch } from "react-icons/ci";
import { IoEnter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Suggetions from "./Suggetions";
import { useState } from "react";

function SearchBar({ onSubmit, onEnter }: { onSubmit: (keyword: string) => void; onEnter: (keyword: string) => void }) {
    const [keyword, setKeyword] = useState("");

    function handileChange(newKeyword: string) {
        setKeyword(newKeyword)
    }

    return (
        <div className="flex flex-col w-2xl" onKeyDown={(e) => { e.key === 'Enter' && onEnter(keyword) }}>
            <div className={`flex items-center justify-between text-gray-500 w-full border border-gray-800 border-2 rounded-3xl px-4 py-3 font-mono hover:shadow-lg hover:text-gray-300 transition-colors duration-200 ease-in-out focus-within:border-primary focus-within:text-white focus-within:outline-none focus-within:shadow-lg focus-within:shadow-primary/10`}>
                <div className='flex items-center gap-2 flex-1'>
                    <CiSearch className='' />
                    <input type="text" placeholder="Search GitHub username..." className='flex-1 bg-transparent outline-none' value={keyword} onChange={(e) => handileChange(e.target.value)} />
                </div>
                {keyword && <IoClose className="mr-5 cursor-pointer" onClick={() => setKeyword('')} />}
                <button className='flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 ease-in-out' onClick={() => onSubmit(keyword)}>
                    <span className="text-xs">Press Enter</span>
                    <IoEnter className="text-xl" />
                </button>
            </div>
            <Suggetions />
        </div>
    )
}

export default SearchBar
