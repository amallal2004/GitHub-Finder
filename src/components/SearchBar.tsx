import { CiSearch } from "react-icons/ci";
import { IoEnter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Suggetions from "./Suggetions";
import { useEffect, useState } from "react";
import { useDebounce } from 'react-use'
import type { GitHubSearchUsers } from "../App";

function SearchBar({ 
    onSubmit, 
    onEnter,
    featchSuggestions,
}: {
    onSubmit: (keyword: string) => void; 
    onEnter: (keyword: string) => void 
    featchSuggestions: (query: string) => Promise<GitHubSearchUsers[]>,
}) {

    const [keyword, setKeyword] = useState("");
    const [debounce, setDebounce] = useState("");
    const [suggetions, setSuggetions] = useState<GitHubSearchUsers[]>([]);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useDebounce(() => setDebounce(keyword), 500, [keyword])

    useEffect(() => {
        if (!debounce || debounce.trim().length < 3) {
            return;
        }

        const loadSuggestions = async () => {
            try {
                const data = await featchSuggestions(debounce);
                setSuggetions(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadSuggestions();
    }, [debounce]);

    function handileChange(newKeyword: string) {
        setKeyword(newKeyword)
    }

    function onSelectUser(username: string) {
        setKeyword(username)
        onSubmit(username)
        setSuggetions([])
    }
    

    return (
        <div className="flex flex-col w-2xl relative" onKeyDown={(e) => { e.key === 'Enter' && (onEnter(keyword), setIsFocused(false));  }}>
            <div className={`flex items-center justify-between text-gray-500 w-full border border-gray-800 border-2 rounded-3xl px-4 py-3 font-mono hover:shadow-lg hover:text-gray-300 transition-colors duration-200 ease-in-out focus-within:border-primary focus-within:text-white focus-within:outline-none focus-within:shadow-lg focus-within:shadow-primary/10`}>
                <div className='flex items-center gap-2 flex-1'>
                    <CiSearch className='' />
                    <input 
                        type="text" 
                        placeholder="Search GitHub username..." 
                        value={keyword} 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {setTimeout(() => setIsFocused(false),150)}}
                        onChange={(e) => handileChange(e.target.value)} 
                        className='flex-1 bg-transparent outline-none' 
                    />
                </div>
                {keyword && <IoClose className="mr-5 cursor-pointer" onClick={() => setKeyword('')} />}
                <button className='flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 ease-in-out' onClick={() => onSubmit(keyword)}>
                    <span className="text-xs">Press Enter</span>
                    <IoEnter className="text-xl" />
                </button>
            </div>
            {isFocused && keyword.length > 2 && <Suggetions suggetions={suggetions} onSelectUser={onSelectUser} className="absolute left-0 right-0 top-full mt-2" username={keyword} />}
        </div>
    )
}

export default SearchBar
