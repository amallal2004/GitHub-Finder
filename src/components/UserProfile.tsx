import { Wedget } from "./Wedget"
import type { GitHubUser } from "../App"
import { IoPeople, IoLocationSharp, IoDocumentText } from "react-icons/io5";
import { FaLink, FaRegStar } from "react-icons/fa";
import { FaGithub, FaSquarePollHorizontal, FaArrowLeftLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function Button({ title, href }: { title: string, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="self-start ml-auto">
            <div className="flex items-center gap-2 border border-primary rounded-2xl px-4 py-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:shadow-primary/50 cursor-pointer ">
                <FaGithub />
                {title}
                <MdArrowOutward className="text-xl" />
            </div>
        </a>
    )
}


function Card({ icon, title, number }: { icon: React.ReactNode, title: string, number: number }) {



    return (
        <div className="flex gap-3 items-start bg-[#11181f] px-4 py-4 border border-gray-700 rounded-lg text-gray-400 font-mono transition-all duration-300 hover:bg-white/10 hover:shadow-md hover:text-white cursor-pointer">
            <div className="text-xl">
                {icon}
            </div>
            <div className="flex flex-col items-start">
                <span className="text-sm">{title}</span>
                <span className="text-xl text-white font-bold">{number}</span>
            </div>
        </div>
    )

}

function About() {
    return (
        <div className="flex gap-5 text-sm border-y border-gray-800 px-2 py-6">
            <IoDocumentText className="text-xl text-gray-300" />
            <div className="flex flex-col gap-2">
                <span className="text-gray-300">About</span>
                <p className="font-inter text-gray-500">My Name is OctoCat. I'm a GitHub Mascot...</p>
            </div>
        </div>
    )
}


function FooterArea({ setSearchUser }: { setSearchUser: (user: GitHubUser | null) => void }) {
    return (
        <div className="flex w-full text-gray-700 items-center justify-between text-sm font-mono">
            <div onClick={() => setSearchUser(null)} className="flex items-center gap-3 hover:text-primary cursor-pointer transition-all duration-300">
                <FaArrowLeftLong className="text-xl" />
                <span className="">Search another user</span>
            </div>
            <div className="flex items-center gap-3 hover:text-primary cursor-pointer transition-all duration-300">
                <span className="">Data from Github Api</span>
            </div>
        </div>
    )
}


function UserProfile({ img, name, username, bio, location, github, gists, repos, followers, following, setSearchUser }: { img: string, name: string, username: string, bio: string, location: string, github: string, gists: number, repos: number, followers: number, following: number, setSearchUser: (user: GitHubUser | null) => void }) {
    return (
        <div className="flex flex-col gap-5 border border-gray-800 p-5 rounded-xl">
            <div className="flex gap-3 items-center font-inter">
                <img
                    src={img}
                    alt="profile-pic"
                    className="w-40 h-40 rounded-full border border-white border-5"
                />
                <div className="flex flex-col  text-left gap-2">
                    <Wedget title="USER FOUND" size="mini" />
                    <h2 className="text-2xl font-bold mt-1">{name}</h2>
                    <span className="text-sm text-gray-500">@{username}</span>
                    <p className="text-sm text-gray-500">{bio}</p>
                    <div className="flex flex-row gap-5 text-sm text-gray-500` ">
                        <div className="flex items-center gap-2">
                            <IoLocationSharp />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLink />
                            <span>{github}</span>
                        </div>
                    </div>
                </div>
                <Button href={github} title="View on Github" />
            </div>
            <div className="flex justify-around gap-3 ">
                <Card icon={<IoPeople />} title="Followers" number={followers} />
                <Card icon={<IoPeople />} title="Following" number={following} />
                <Card icon={<FaSquarePollHorizontal />} title="Public Repositories" number={repos} />
                <Card icon={<FaRegStar />} title="Public Gists" number={gists} />
            </div>
            {/* <hr className="border border-t border-gray-800 w-full" /> */}
            <About />
            <FooterArea setSearchUser={setSearchUser} />
        </div>
    )
}

export default UserProfile