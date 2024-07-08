import NavBar from "./NavBar"
import Topbar from "./TopBar"
import NavBarDashBoard from "./NavBarDashBoard"

export default function LayoutDashBoard({ children }) {
    return (
        <div>
            <Topbar/>
            <NavBar/>
            <div className="flex text-white min-h-screen bg-gradient-to-b bg-n-8 gap-12">
                <NavBarDashBoard/>
                <div className="flex flex-col w-10/12 mt-20 ">
                    {children}
                </div>
            </div>
        </div>

    )
}