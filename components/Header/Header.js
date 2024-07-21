'use client'
import { useAuth } from '@/contexts/AuthContext';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setShowPostForm } from '@/app/redux/slices/showPostForm';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({toggleActive}) {
    const {currentUser} = useAuth();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const showPostForm = useSelector((state) => state.showPostForm);
    const router = useRouter()

    const userprofile = () => {
        router.push(`/profile/${currentUser.uid}`)
    }

    return (
        <header onClick={() => userprofile()}>
            <a href={`/profile/${currentUser.uid}`} className="menu" onClick={toggleActive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
                </svg>
            </a>
            {!showPostForm && pathname.includes("/dashboard/forum") && <button onClick={() => dispatch(setShowPostForm())} className="bg-gradient-to-r from-[#432371] to-[#faae7b] text-white active:scale-75 transform transition duration-300 ease-in-out px-6 py-1 mx-4 rounded-md">Open the form</button>}
            <div className="userItems">
                <a href="#" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                    <span className='like bg-gradient-to-r from-[#432371] to-[#faae7b]'>0</span>
                </a>
                <a href="#" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                    </svg>
                    <span className='bag bg-gradient-to-r from-[#432371] to-[#faae7b]'>0</span>
                </a>
                <div className='avatar'>
                    <a href='#'>
                        <img src={currentUser.avatar} alt='User Image'/>
                    </a>
                    <div className="user">
                        <span>{currentUser.name}</span>
                        <a href="#">View Profile</a>
                    </div>
                </div>
            </div>
        </header>
    )
}