'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="absolute top-4 left-[650px] text-white z-20">
            <ul className="flex items-center justify-center gap-10 text-xl">
                <NavLink label="Home" url="/" active={pathname === "/"}/>
                <NavLink label="About" url="/about" active={pathname.includes("about")}/>
                <NavLink label="Documents" url="/dashboard/forum" active={pathname.includes("dashboard")}/>
            </ul>
        </div>
    )
}

export const NavLink = ({label, url, active}) => {
    return (
        <li className={`py-2 px-2 rounded-sm ${active ? " text-primary border-b-2 border-primary" : "hover:border-b-4 hover:border-primary hover:text-primary duration-500 ease-in-out"}`}>
            <Link href={url} >{label}</Link>
        </li>
    )
}