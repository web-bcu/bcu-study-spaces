'use client'
import { setAdmin } from "@/app/redux/slices/admin";
import { FetchAdmins } from "@/components/hooks/FetchAdmins";
import LayoutDashBoard from "@/components/LayoutDashBoard/LayoutDashBoard";
import ShowFiles from "@/components/ShowFiles";
import TopBar from "@/components/TopBar";
import UploadFile from "@/components/UploadFiles";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Document() {
    const admin = useSelector((state) => state.admin);
    // console.log(admin);

    return (
        <LayoutDashBoard>
            {admin && <UploadFile parentId=""/>}
            <div className="mt-10 w-full">
                <ShowFiles parentId=""/>
            </div>
        </LayoutDashBoard>
    )
}