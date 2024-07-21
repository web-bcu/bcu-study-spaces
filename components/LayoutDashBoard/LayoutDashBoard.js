'use client'
import NavBarDashBoard from "../NavBarDashBoard/NavBarDashBoard";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import './layoutDashBoard.css';
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "@/app/redux/slices/active";
import { FetchAdmins } from "../hooks/FetchAdmins";
import { setAdmin } from "@/app/redux/slices/admin";
import { useEffect } from "react";

export default function LayoutDashBoard({ children }) {
    const { userLoggedIn, currentUser } = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    const { admins } = FetchAdmins();
    const active = useSelector((state) => state.active);

    const handleToggleActive = () => {
        dispatch(setActive());
    }

    const signIn = () => {
        router
    }

    if (admins.includes(currentUser.email)) {
        dispatch(setAdmin(true));
    }
    else {
        dispatch(setAdmin(false));
    }

    console.log(active);

    if (!userLoggedIn) router.push('/signin');
    return (
        <main className="layoutDashBoard">
            <NavBarDashBoard active={active} />
            <div className={`banner ${active ? 'active' : undefined}`}>
                <Header toggleActive={handleToggleActive} />
                {children}
            </div>
        </main>

    )
}

// className="flex text-white bg-gradient-to-b min-h-screen bg-n-8 gap-12"
// className="flex flex-col w-10/12 mt-20 overflow-y-auto h-screen"