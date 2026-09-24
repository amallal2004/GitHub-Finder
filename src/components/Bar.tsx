import { IoPeople } from "react-icons/io5";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { RiBarChart2Fill } from "react-icons/ri";

const stats = [
    {
        id: 1,
        title: "View profiles",
        icon: <IoPeople />,
    },
    {
        id: 2,
        title: "Check Repositories",
        icon: <FaSquarePollHorizontal />
    },
    {
        id: 3,
        title: "View Organizations",
        icon: <RiBarChart2Fill />
    }
]

function Sec({ title, icon }: { title: string, icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
        </div>
    )
}

function Bar() {
    return (
        <div className="w-full flex gap-4 justify-center text-gray-800 font-mono hidden">
            {stats.map(stat => (
                <>
                    <Sec title={stat.title} icon={stat.icon} key={stat.id} />
                    {stat.id !== 3 ? <span className="">|</span> : null}
                </>
            ))}
        </div>
    )
}

export default Bar