'use client'
import Image from "next/image";
import Card from "./Card";

export default function PostFormCard() {

    const handleImageUpload = (ev) => {
        ev.preventDefault();
        const files = ev.target.files;
        console.log("Image uploading...", files);
    }

    return (
        <Card>
            <div className="flex gap-2">
                <div>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/bcu-study-space-cded8.appspot.com/o/avatar%2Fdog.png?alt=media&token=753fcec7-b8c0-4b64-b2be-0e07f43270a8" alt="avatar" width={60} height={60} />
                </div>

                <textarea className="grow p-3 h-14 bg-gradient-to-r from-[#432371] to-[#faae7b] border border-slate-50 text-white" placeholder={`Have something to share?`} />
            </div>
            <div className="flex gap-5 items-center mt-2">
                <div>
                    <label className="flex gap-1">
                        <input type="file" className="hidden" multiple onChange={handleImageUpload} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="hidden md:block">Photos</span>
                    </label>
                </div>
            </div>
        </Card>
    )
}