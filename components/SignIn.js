'use client'
import {BiUser} from "react-icons/bi";
import {AiOutlineUnlock} from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signInUser, signUpNewUser } from "@/app/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {BeatLoader} from "react-spinners";
import { useAuth } from "@/contexts/AuthContext";
import { AvatarData } from "@/data/avatarData";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/app/firebaseconfig";
import { setAvatar } from "@/app/redux/slices/avatar";

export default function SignIn() {
    const {userLoggedIn} = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAvatars = async () => {
            try {
                const avatarCollection = collection(database, 'avatar');
                const avatarSnapShot = await getDocs(avatarCollection);
                const avatarList = avatarSnapShot.docs.map(doc => doc.data());
                dispatch(setAvatar(avatarList));
            } catch(error) {
                alert("Something went wrong!");
            }
        };
        fetchAvatars();
    }, []);

    const pushMain = () => {
        router.push('/dashboard/forum');
    }

    if (userLoggedIn) pushMain();
    // font-lobster font-normal
    return (
        <div className="relative text-white h-[100vh] flex justify-center items-center ">
            <img src="https://c1.wallpaperflare.com/preview/1/1010/561/table-work-computer-study-reading.jpg" className="h-screen w-screen absolute"/>
            <TheForm/>
        </div>
    )
}

function TheForm() {
    const [showLogin, setShowLogin] = useState(false);

    const handleShow = (bool) => {
        setShowLogin(bool);
    }

    return (
        <div className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm absolute z-10 w-2/4 h-4/5 left-1/4 rounded-md shadow-md">
            <Register handleShow={handleShow}/>
            <Login showLogin={showLogin} handleShow={handleShow}/>
        </div>
    )
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Register({handleShow}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const avatar = useSelector((state) => state.avatar.value);
    // console.log(avatar[0].image_url);
    

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email.includes("@gm.uit.edu.vn")) {
            toast.error("Your email must have @gm.uit.edu.vn");
            return;
        }
        if (password.length < 6) {
            toast.error("Your password must have more than 6 characters");
            return;
        }

        try {
            if (!isSigningUp && password === confirmPass) {
                setIsSigningUp(true);
                const index = getRandomInt(1, avatar.length - 1);
                console.log("Here");
                await signUpNewUser(email, password, name, avatar[index].image_url);
                // await signUpNewUser(email, password);
            }
            else if (password !== confirmPass) {
                toast.error("Confirm your Password correctly!")
            }
            setIsSigningUp(false);
        } catch (e) {
            toast.error("Error ocured! Please try again later or contact the owner");
            // toast.error(e);
            setIsSigningUp(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-12 mt-8" onClick={e => handleShow(false)}>
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold text-center text-white hover:text-purple-500">Sign Up</h1>
                <h2 className="text-xl text-center text-white hover:text-purple-500">New here! Create your own account</h2>
            </div>
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="relative my-4 ">
                    <input 
                        type="email" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer " 
                        placeholder=""
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Email</label>
                    <BiUser className="absolute -top-2 right-4 text-xl"/>
                </div>

                <div className="relative my-4 ">
                    <input 
                        type="text" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer " 
                        placeholder=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Name</label>
                    <BiUser className="absolute -top-2 right-4 text-xl"/>
                </div>
                    
                <div className="relative my-4">
                    <input 
                        type="password" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer " 
                        placeholder=""
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                    <AiOutlineUnlock className="absolute -top-2 right-4 text-xl"/>
                </div>

                <div className="relative my-4">
                    <input 
                        type="password" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer " 
                        placeholder=""
                        value={confirmPass}
                        onChange={e => setConfirmPass(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm your Password</label>
                    <AiOutlineUnlock className="absolute -top-2 right-4 text-xl"/>
                </div>
                    
                <button className="w-[500px] mb-4 text-[18px] mt-6 rounded-full bg-white text-purple-600 hover:bg-purple-600 hover:text-white py-2 transition-colors duration-300">
                    {isSigningUp ? <BeatLoader color="#FFF" /> : "Create Account" }
                </button>
            </form>
        </div>
    )
}

function Login({showLogin, handleShow}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            if (!isSigningIn) {
                setIsSigningIn(true);
                const response = await signInUser(email, password);
                if (response.message === "Not Found") {
                    toast.error("You have not signed up yet!");
                    setIsSigningIn(false);
                    return;
                }
                setIsSigningIn(false);
                return;
            }
        } catch(e) {
            toast.error("Check your email and Password again or create another account");
            setIsSigningIn(false);
        }
    }

    return (
        <div className={`bg-white absolute z-20 top-20 w-full ${showLogin ? "rounded-t-full h-full" : "translate-y-[500px] h-20"} duration-300 transform overflow-hidden flex flex-col items-center justify-center gap-12 mt-8`} onClick={e => handleShow(true)}>
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold text-center hover:text-purple-500 text-black">Login</h1>
                {showLogin && <h2 className="text-xl text-center hover:text-purple-500 text-black">Welcome back! Login to join</h2>}
            </div>
            {showLogin && 
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="relative my-4 ">
                    <input 
                        type="email" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer " 
                        placeholder=""
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Email</label>
                    <BiUser className="absolute -top-2 right-4 text-xl"/>
                </div>
                    
                <div className="relative my-4">
                    <input 
                        type="password" 
                        className="block w-[500px] py-2.3 px-0 text-xl text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer " 
                        placeholder=""
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="" className="absolute text-xl text-black duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                    <AiOutlineUnlock className="absolute -top-2 right-4 text-xl"/>
                </div>

                {/* <div className="relative my-4">
                    <input type="password" className="block w-[500px] py-2.3 px-0 text-xl text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer " placeholder=""/>
                    <label htmlFor="" className="absolute text-xl text-purple-500 duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm your Password</label>
                </div> */}
                <div className="relative -mt-4">
                    <span className="absolute right-0 text-black hover:text-purple-500"><Link href="#">Forgot your password?</Link></span>
                </div>
                    
                <button className="w-[500px] mb-4 text-[18px] mt-6 rounded-full text-white hover:bg-purple-600 bg-black py-2 transition-colors duration-300">
                    {isSigningIn ? <BeatLoader color="#FFF" /> : "Login" }
                </button>
            </form>}
        </div>
    )
}