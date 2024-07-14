'use client'
import { NavDashBoards } from "@/data/navDashBoard";
import Link from "next/link";
import { useState } from "react";
import NavListItem from "../NavListItem/NavListItem";
import './navBarDashBoard.css';

export default function NavBarDashBoard({active}) {
    const [navData, setNavData] = useState(NavDashBoards);
    return (
        <div className={`sideMenu ${active ? 'active' : undefined}`}>
            <Link href="/" className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/bcu-study-space-cded8.appspot.com/o/avatar%2FOIP.jpeg?alt=media&token=d3fff1dc-9775-464c-a94e-95b4a8606ef0" className="w-20 h-20"/>
                <span className={`bg-gradient-to-r from-[#432371] to-[#faae7b] inline-block text-transparent bg-clip-text font-lobster font-normal ${active ? 'hidden' : 'text-7xl'}`}>BCU</span>
            </Link>
            <ul className="nav">
                {navData.map((section, index) => (
                    <NavListItem key={index} section={section}/>
                ))}
            </ul>
        </div>
    )
}

// {NavDashBoards.map((section, index) => (
//     <Link href={section.link} key={index} className={`${pathname.includes(section.link) ? "bg-gradient-to-r from-[#432371] to-[#faae7b] text-white" : "text-white"} text-2xl text-center hover:bg-gradient-to-r from-[#432371] to-[#faae7b] flex gap-5 justify-start items-center h-16 rounded-md`}>

//         <span className="w-10 h-10 text-2xl flex justify-center items-center">{section.icon}</span>
//         {/* {section.icon} */}
//         {section.name}
//     </Link>
// ))}

// className="flex flex-col gap-10 h-screen border-y border-r border-y-white border-r-white rounded-md w-2/12 pt-5 pr-2"
