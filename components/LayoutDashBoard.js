import NavBar from "./NavBar"
import Topbar from "./TopBar"
import NavBarDashBoard from "./NavBarDashBoard"

export default function LayoutDashBoard({ children }) {
    return (
        <div>
            <Topbar/>
            <NavBar/>
            <div className="flex text-white bg-gradient-to-b min-h-screen bg-n-8 gap-12">
                <NavBarDashBoard/>
                <div className="flex flex-col w-10/12 mt-20 overflow-y-auto h-screen">
                    {children}
                </div>
            </div>
        </div>

    )
}