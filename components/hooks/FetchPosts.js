'use client'
import { database } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const postsFirestore = collection(database, "posts")

export default function FetchPosts(post_owner) {
    const [postLists, setPostLists] = useState([]);

    const getPosts = async() => {
        try {
            const q = query(postsFirestore, where("post_owner", "==", post_owner));
            const querySnapshot = await getDocs(q)
            const posts = []
            querySnapshot.forEach((doc) => {
                posts.push({...doc.data(), id: doc.id})
            });
            setPostLists(posts)
        } catch(error) {
            console.error("Error occurred: ", error);
            alert("Could not fetch posts")
        }
    }

    useEffect(() => {
        getPosts();
    }, [post_owner])

    return {postLists}
}