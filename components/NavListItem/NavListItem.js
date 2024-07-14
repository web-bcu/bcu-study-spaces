import Link from "next/link";
import { usePathname } from "next/navigation";
// import './navListItem.css';

export default function NavListItem({ section }) {
    const pathname = usePathname();
    return (
        <li>
            <Link href={section.link} className={`${pathname.includes(section.link) ? "active" : undefined}`}>
                <span className="w-10 h-10 text-2xl flex justify-center items-center">{section.icon}</span>
                {/* {section.icon} */}
                <span className="navName">{section.name}</span>
            </Link>
        </li>
    )
}

// className={`${pathname.includes(section.link) ? "bg-gradient-to-r from-[#432371] to-[#faae7b] text-white" : "text-white"} text-2xl text-center hover:bg-gradient-to-r from-[#432371] to-[#faae7b] flex gap-5 justify-start items-center h-16 rounded-md`}