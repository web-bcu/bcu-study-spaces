'use client'
import { database } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const savedPostFirestore = collection(database, "saved_posts");

export default function FetchIsSaved(info) {
    const [savedPost, setSavedPost] = useState([]);

    const getSavedPosts = async() => {
        try {
            const q = query(savedPostFirestore, where("user_id", "==", info.user_id));
            const querySnapshot = await getDocs(q)
            const posts = []
            querySnapshot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            });
            const filteredPosts = posts.filter((item) => item.post_id === info.post_id);
            setSavedPost(filteredPosts)
        } catch(error) {
            console.error("Error occurred: ", error);
        }
    }

    useEffect(() => {
        getSavedPosts();
    }, [info.user_id, info.post_id]);

    return {savedPost}
}