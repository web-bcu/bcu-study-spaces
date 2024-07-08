import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function Layout({children}) {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b bg-n-8 gap-12 p-4 text-white">
            <TopBar/>
            <NavBar/>
            {children}
        </main>
    )
}