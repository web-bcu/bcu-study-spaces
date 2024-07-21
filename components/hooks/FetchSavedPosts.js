'use client'
import { database } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const postsFirestore = collection(database, "saved_posts")

export default function FetchSavedPosts(user_id) {
    const [savedLists, setSavedLists] = useState([]);

    const getSaved = async() => {
        try {
            const q = query(postsFirestore, where("user_id", "==", user_id));
            const querySnapshot = await getDocs(q)
            const posts = []
            querySnapshot.forEach((doc) => {
                posts.push({...doc.data(), id: doc.id})
            });
            setSavedLists(posts)
        } catch(error) {
            console.error("Error occurred: ", error);
            alert("Could not fetch posts")
        }
    }

    useEffect(() => {
        getSaved();
    }, [user_id])

    return {savedLists}
}