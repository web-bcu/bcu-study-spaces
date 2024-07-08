'use client'
import React from "react";
import {
    RxDiscordLogo,
} from "react-icons/rx";

import { FaFacebook, FaPhone } from "react-icons/fa";
import { NavLink } from "./NavBar";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
    const pathname = usePathname();
    return (
        <div className="w-full h-full text-gray-200 shadow-lg p-[15px] z-10">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full flex flex-row items-start justify-around flex-wrap">

                    <div className="w-[10%] h-auto flex flex-col items-start justify-start">
                        <div className="font-bold text-[16px] mb-[15px]">Contact</div>
                        <a href="facebook.com" className="h-auto w-auto flex flex-row items-center my-[15px] cursor-pointer">
                            <FaFacebook href="www.facebook.com/groups/259336766873450" />
                            <span className="text-[15px] ml-[6px]">Facebook</span>
                        </a>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <FaPhone />
                  <span className="text-[15px] ml-[6px]">113</span>
              </p> */}
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="w-[10%] h-auto flex flex-col items-start justify-start">
                        {/* <div className="font-bold text-[16px] mb-[15px]">Pages</div> */}
                        <ul className="flex-col items-center justify-center gap-5 text-xl">
                            <NavLink label="Home" url="/" active={pathname === "/"}/>
                            <NavLink label="About" url="/about" active={pathname.includes("about")}/>
                            <NavLink label="Documents" url="/files" active={pathname.includes("files")}/>
                        </ul>
                    </div>

                    <div className="w-[40%] h-auto flex flex-col items-start justify-start text-[20px] gap-3">
                        <Image
                            src="/OIP.jpeg"
                            alt="logo"
                            width={48}
                            height={48}
                        />
                        <p className="items-center font-light text-left">"Founded on June 16, 2024, the Study Committee of the Faculty of Software Engineering is a place to share knowledge and a destination for students to find resources and hone necessary skills."</p>
                        {/* <p className="items-center font-light text-center">-Me</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}