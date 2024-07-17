'use client'
import { database } from "@/app/firebaseconfig";
import LayoutDashBoard from "@/components/LayoutDashBoard/LayoutDashBoard";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const posts = collection(database, "posts");

export default function Forum() {
    const [allPosts, setAllPosts] = useState([]);
    const showPostForm = useSelector((state) => state.showPostForm);

    const fetchPosts = async () => {
        onSnapshot(posts, async (snapshot) => {
            const postPromises = snapshot.docs.map(async (postDoc) => {
                const postData = postDoc.data();
                const userRef = doc(database, "users", postData.post_owner);
                const userSnapshot = await getDoc(userRef);
                const userData = userSnapshot.data();
                return { id: postDoc.id, ...postData, ...userData };
            });
            
            const posts = await Promise.all(postPromises);
            setAllPosts(posts);
        });
    };

    useEffect(() => {
        fetchPosts()
    }, []);
    console.log(allPosts)

    return (
        <LayoutDashBoard>
            {showPostForm && <PostFormCard onPost={fetchPosts}/>}
            
            <div className="h-screen flex flex-col gap-3 overflow-y-auto rounded-lg">
                {/* <div className="flex flex-col gap-3 rounded-lg">
                    <PostFormCard />
                    <PostFormCard />
                </div> */}
                {allPosts?.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))}
                {/* <div className="h-96">iuwehfijqwhvhhhhhhhhhhhhhhhhhhhhhhhh
                    gughierhifheruhuerhgeurghe
                    erughuehguehguihgerohgipurg
                    worhgfiurhiruhgiurehguier
                    wiufghwiuhvfiuwerhgfiuhjnvjngjk
                    kjngvkjnjekrnjerngkjernkejrng
                    kjnvjefinujernjefngjkergnekrjgnelrjgetgj
                    jefnvkejnvefjkngkje
                    fkjnejbnteujbgfejb
                    kefjnbebjertgeirjklfk
                </div> */}
                <p className="mb-60"></p>
            </div>
        </LayoutDashBoard>
    )
}