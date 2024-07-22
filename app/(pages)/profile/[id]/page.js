'use client'
import Avatar from "@/components/Avatar";
import FileFrame from "@/components/FileFrame";
import FetchPosts from "@/components/hooks/FetchPosts";
import FetchSavedPosts from "@/components/hooks/FetchSavedPosts";
import { fetchFilesByParentId } from "@/components/utils/firestore";
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";

export default function UserProfile() {
    const {currentUser} = useAuth();
    const {postLists} = FetchPosts(currentUser.uid);
    const {savedLists} = FetchSavedPosts(currentUser.uid);
    const [userFiles, setUserFiles] = useState([]);
    console.log(savedLists, userFiles);

    useEffect(() => {
        const fetchFilesData = async() => {
            let posts = [];
            if (postLists?.length) {
                for (let i = 0; i < postLists.length; i++) {
                    const fileList = await fetchFilesByParentId(postLists[i].id)
                    posts = [...posts, ...fileList];
                }
            }
            if (savedLists?.length) {
                for (let i = 0; i < savedLists.length; i++) {
                    const fileList = await fetchFilesByParentId(savedLists[i].post_id)
                    posts = [...posts, ...fileList];
                }
            }
            setUserFiles(posts);
        };

        fetchFilesData();
    }, [postLists, savedLists]);

    return (
        <div className="bg-[#0d171f] h-screen text-white relative">
            <Link href="/dashboard/forum" className="absolute left-4 top-4 flex items-center gap-3 btn btn-primary text-white">
                <FontAwesomeIcon icon={faChevronLeft}/>
                Back to Dashboard
            </Link>
            <div className=" w-5/6 mx-auto pt-16 flex">
                <div className="flex w-1/3 flex-col gap-10">
                    <Avatar url={currentUser.avatar} size="lg"/>
                    <p className="text-3xl">{currentUser.name}</p>
                    {/* <Button btnClass="btn btn-success text-white w-72" title="Edit Profile"/> */}
                </div>
                <div className="flex flex-col gap-3 w-2/3">
                    <p className="text-4xl">Your files</p>
                    {userFiles?.length > 0 && 
                        <div className="grid grid-cols-2 gap-5 w-full">
                            {userFiles.map((file) => <FileFrame key={file.id} fileURL={file.fileURL} fileName={file.fileName} fileId={file.id} filePath={file.filePath} className="border"/>)}
                        </div>
                    }
                </div> 
            </div>
        </div>
    )
}