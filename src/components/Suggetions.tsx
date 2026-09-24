import { FaSearch } from "react-icons/fa"
import { IoEnter } from "react-icons/io5"

function Suggestion() {
    return (
        <div className="flex flex-row gap-2 items-center justify-between w-full hover:bg-primary/10 transition-all duration-100 ease-in-out py-4 px-4 rounded-lg cursor-pointer">
            <div className="flex gap-4 items-center">
                <img
                    src="https://photogov-com.fra1.cdn.digitaloceanspaces.com/admin/upload/86bed38f-9035-428e-aeb8-1ac0aba4ee8a.webp"
                    alt="profilepic"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col gap-1font-mono text-left text-sm">
                    <span className="text-white">Profile Name</span>
                    <span className="text-xs text-gray-700">@username</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-gray-700">@github</span>
            </div>
        </div>
    )
}

function BottomSection() {
    return (
        <div>
            <hr className="border-gray-900"/>
            <div>
                <div className="flex flex-row items-center justify-between w-full text-gray-300 font-[space_mono] px-4 py-4">
                    <div className="flex items-center gap-4">
                        <FaSearch />
                        <span>Search for "amal"</span>
                    </div>
                    <IoEnter className="text-2xl" />
                </div>
            </div>
        </div>
    )
}


function Suggetions() {
    return (
        <div className="flex flex-col w-full border border-gray-800 border-2 rounded-lg px-1 py-1 z-1 hidden">
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <BottomSection />
        </div>
    )
}

export default Suggetions