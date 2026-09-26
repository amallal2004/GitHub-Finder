import { FaGithub, FaArrowLeftLong } from "react-icons/fa6";

function Button({ onClick }: { onClick: () => void }) {
    return (
        <div onClick={onClick} className="flex hover:bg-primary hover:text-white cursor-pointer transition-all duration-300 items-center justify-center gap-3 border border-gray-500 text-sm rounded-xl px-4 py-3">
            <FaArrowLeftLong />
            <span>Search another username</span>
        </div>
    )
}

function UserNotFound({ error, username, onClear }: { error: string, username: string | null, onClear: () => void }) {
    return (
        <div className="flex flex-col items-center gap-5 justify-center font-mono text-gray-400 border border-gray-500 px-40 py-10 rounded-xl">
            <div className="flex flex-col items-center justify-center gap-3">
                <FaGithub className="text-[100px]" />
                <h2 className="text-3xl font-bold text-white">User <span className="text-primary">Not Found</span></h2>
                <p className="text-center">
                    We couldn't find the profile for <br />
                    <span className="font-bold text-white text-xl">"{username}"</span>
                </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-500 text-sm rounded-xl px-4 py-3 w-[400px]">
                <div className="flex items-start gap-2">
                    <span className="text-primary">$</span>
                    <span>
                        GitHub Lookup "{username}"
                    </span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span className="text-red-500">
                        {error}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-start self-start gap-3">
                <h3 className="text-lg text-white font-bold">Try again</h3>
                <div className="flex items-center gap-3 text-sm">
                    <div className="bg-primary rounded-full w-2 h-2" />
                    <span>Check the spelling of the username</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <div className="bg-primary rounded-full w-2 h-2" />
                    <span>Make sure it's a valid GitHub username</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <div className="bg-primary rounded-full w-2 h-2" />
                    <span>Try Searching for another developer</span>
                </div>
            </div>
            <Button onClick={onClear} />
        </div>
    )
}

export default UserNotFound