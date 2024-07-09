'use client'
import { database } from "@/app/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const files = collection(database, "files");

export default function FetchFiles(parentId) {
    const [fileList, setFileList] = useState([]);

    const getFolders = () => {
        if (!parentId) {
            onSnapshot(files, (response) => {
                setFileList(
                    response.docs.map((item) => {
                        return {...item.data(), id: item.id};
                    })
                    .filter((item) => item.parentId === "")
                );
            });
        }
        else {
            onSnapshot(files, (response) => {
                setFileList(
                    response.docs.map((item) => {
                        return {...item.data(), id: item.id};
                    })
                    .filter((item) => item.parentId === parentId)
                );
            });
        }
    };

    useEffect(() => {
        getFolders()
    }, [parentId]);

    return {fileList};
}