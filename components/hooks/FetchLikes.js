'use client'
import { database } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const likes = collection(database, "likes")

export default function FetchLikes(post_id) {
    const [postLikes, setPostLikes] = useState([])

    const getLikes = async () => {
        try {
            const q = query(likes, where("post_id", "==", post_id));
            const querySnapshot = await getDocs(q)
            const getLikes = []
            querySnapshot.forEach((doc) => {
                getLikes.push({...doc.data(), id: doc.id})
            });
            setPostLikes(getLikes)
        } catch(error) {
            console.error("Error occurred: ", error)
        }
    }

    useEffect(() => {
        getLikes();
    }, [post_id]);

    return {postLikes}
}