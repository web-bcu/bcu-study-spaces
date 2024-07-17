import { database } from "@/app/firebaseconfig";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { addFiles } from "./firestore";

const posts = collection(database, "posts");

export async function uploadPost(post) {
    try {
        const { post_owner, content, filesName, filesURL, filesPath } = post;
        const docId = doc(posts).id;

        await setDoc(doc(posts, docId), {
            id: docId,
            post_owner,
            content,
            filesName,
            filesURL,
            filesPath,
            createdAt: serverTimestamp()
        });

        for (let i = 0; i < filesURL.length; i++) {
            addFiles(filesURL[i], filesName[i], docId, filesPath[i])
        }

        return "Success";
    } catch (error) {
        console.log(error);
    }
}