import Link from "next/link";
import Card from "./Card";
import Avatar from "./Avatar";
import Image from "next/image";

export default function PostCard() {
    return (
        <Card>
            <div className="flex gap-3">
                <div>
                    <Link href={"/profile/"}>
                        <span className="cursor-pointer">
                            <Avatar/>
                        </span>
                    </Link>
                </div>
                <div className="grow">
                    <p>
                        <Link href={"/profile/"}>
                            <span className="mr-1 font-semibold cursor-pointer hover:underline">
                                Nguyễn Việt An
                            </span>
                        </Link>
                        shared a post
                    </p>
                    {/* <p className="text-gray-500 text-sm">
                        <ReactTimeAgo date={(new Date(created_at)).getTime()}/>
                    </p> */}
                </div>
                <div className="relative">
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="text-white mt-4 flex flex-col gap-4">
                <p>This is a test</p>
                <div className="grid grid-cols-3 gap-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/bcu-study-spaces.appspot.com/o/test-img%2Fchristopher-john-oRHj9sCnDDw-unsplash.jpg?alt=media&token=08a0af7e-50fd-4878-a9e2-de2d8667445c" alt="avatar" className="max-w-full max-h-[700px]"/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bcu-study-spaces.appspot.com/o/test-img%2Fcollin-wisely-6pKBQtYzet0-unsplash.jpg?alt=media&token=9fc78adb-b997-498b-8930-6c41b4abd903" alt="avatar" className="max-w-full max-h-[700px]"/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bcu-study-spaces.appspot.com/o/test-img%2Fscreen-post-i0GAaus50es-unsplash.jpg?alt=media&token=98ac552d-9fc7-4f0e-94f8-4f780d3ed374" alt="avatar" className="max-w-full max-h-[700px]"/>
                </div>
            </div>
            <div className="mt-5 flex gap-8">
                <button className="flex gap-2 item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    11
                </button>
                <button className="flex gap-2 item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    11
                </button>
                <button className="flex gap-2 item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    3
                </button>
            </div>
        </Card>
    )
}