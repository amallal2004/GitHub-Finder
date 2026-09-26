import { FaSearch } from "react-icons/fa"
import { IoEnter } from "react-icons/io5"
import type { GitHubSearchUsers } from "../App";

function Suggestion({
    name,
    username,
    image,
    onSelectUser,
    className,
}: {
    name: string;
    username: string;
    image: string;
    onSelectUser: (username: string) => void;
    className?: string;
}) {
    return (
        <div 
        onClick={() => onSelectUser(username)}
        className={` ${className} flex flex-row gap-2 items-center justify-between w-full hover:bg-primary/10 transition-all duration-100 ease-in-out py-4 px-4 rounded-lg cursor-pointer`}
        >
            <div className="flex gap-4 items-center">
                <img
                    src={image}
                    alt="profilepic"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col gap-1font-mono text-left text-sm">
                    <span className="text-white">{name}</span>
                    <span className="text-xs text-gray-700">@{username}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-gray-700">@{username}</span>
            </div>
        </div>
    )
}

function BottomSection({
    username,
}: {
    username: string;
}) {
    return (
        <div>
            <hr className="border-gray-900" />
            <div>
                <div className="flex flex-row items-center justify-between w-full text-gray-300 font-[space_mono] px-4 py-4">
                    <div className="flex items-center gap-4">
                        <FaSearch />
                        <span>Search for "{username}"</span>
                    </div>
                    <IoEnter className="text-2xl" />
                </div>
            </div>
        </div>
    )
}


function Suggetions(
    {
        suggetions,
        onSelectUser,
        className,
        username,
    }: {
        suggetions: GitHubSearchUsers[];
        onSelectUser: (username: string) => void;
        className?: string;
        username: string;
    }
) {
    return (
        <div className={` ${className} flex flex-col w-full border border-gray-800 bg-[#0c1116] border-2 rounded-lg px-1 py-1 z-1`}>
            {suggetions.map((user) => (
                <Suggestion
                    key={user.id}
                    name={user.login}
                    username={user.login}
                    image={user.avatar_url}
                    onSelectUser={onSelectUser}
                />
            ))}
            {suggetions.length > 2 && <BottomSection username={username} />}
        </div>
    )
}

export default Suggetions