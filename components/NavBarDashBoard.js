'use client'
import { NavDashBoards } from "@/data/navDashBoard";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarDashBoard() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-10 h-screen border-y border-r border-y-white border-r-white rounded-md w-2/12 pt-5 pr-2">
            {NavDashBoards.map((section, index) => (
                <Link href={section.link} key={index} className={`${pathname.includes(section.link) ? "bg-gradient-to-r from-[#432371] to-[#faae7b] text-white" : "text-white"} text-2xl text-center hover:bg-gradient-to-r from-[#432371] to-[#faae7b] flex gap-5 justify-start items-center h-16 rounded-md`}>

                    <span className="w-10 h-10 text-2xl flex justify-center items-center">{section.icon}</span>
                    {/* {section.icon} */}
                    {section.name}
                </Link>
            ))}
        </div>
    )
}