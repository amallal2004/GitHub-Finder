import { Wedget } from "./Wedget"
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";


function Button() {
    return (
        <div>
            
        </div>
    )
}


function Card() {
    return (
        <div>
            <div className="flex gap-5 font-inter">
                <img
                    src="https://photogov-com.fra1.cdn.digitaloceanspaces.com/admin/upload/86bed38f-9035-428e-aeb8-1ac0aba4ee8a.webp"
                    alt="profile-pic"
                    className="w-40 h-40 rounded-full border border-white border-5"
                />
                <div className="flex flex-col  text-left gap-2">
                    <Wedget title="USER FOUND" size="mini" />
                    <h2 className="text-2xl font-bold mt-1">Octopus</h2>
                    <span className="text-sm text-gray-500">@octocat</span>
                    <p className="text-sm text-gray-500">My name is OctoCat. I'm a GitHub Mascod...</p>
                    <div className="flex flex-row gap-5 text-sm text-gray-500` ">
                        <div className="flex items-center gap-2">
                            <IoLocationSharp />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLink />
                            <span>https://github.com/octocat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card