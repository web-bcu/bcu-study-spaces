'use client'
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    const router = useRouter();
    const {userLoggedIn} = useAuth();
    // console.log(pathname)
    return (
        <div className="absolute top-4 left-[650px] text-white z-20">
            <ul className="flex items-center justify-center gap-10 text-xl">
                <NavLink label="Home" url="/" active={pathname === "/"}/>
                <NavLink label="About" url="/about" active={pathname.includes("about")}/>
                <NavLink label="Dashboard" url={`${userLoggedIn ? "/dashboard/forum" : "/signin"}`} active={pathname.includes("dashboard")}/>
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