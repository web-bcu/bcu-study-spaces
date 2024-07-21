import { deleteObject, ref } from "firebase/storage";

import { database, storage } from "@/app/firebaseconfig";
import { collection, addDoc, deleteDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore";

const files = collection(database, 'files')
const users = collection(database, 'users')
const savedPost = collection(database, 'saved_posts')
const likes = collection(database, 'likes')

export const addFiles = async (fileURL, fileName, parentId, filePath) => {
    try {
        await addDoc(files, {
            fileURL: fileURL,
            fileName: fileName,
            filePath: filePath,
            isFolder: false,
            parentId: parentId
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const addFolder = async (payload) => {
    try {
        await addDoc(files, {
            folderName: payload.folderName,
            isFolder: true,
            fileList: payload.fileList,
            parentId: payload.parentId
        })
    }
    catch(err) {
        console.log(err)
    }
}

export const deleteFilePath = async(filePath) => {
    try {
        const fileRef = ref(storage, filePath);
        await deleteObject(fileRef);
    } catch(error) {
        console.error("Could not delete file path: ", error)
    }
}


export const deleteFile = async (filePath, fileId) => {
    try {
        deleteFilePath(filePath);

        const docRef = doc(database, 'files', fileId);
        await deleteDoc(docRef);

        console.log("File deleted successfully");
    } catch (error) {
        console.error("Error deleting file:", error);
    }
}

export const updateFile = async (fileId, newParentId) => {
    try {
        const documentRef = doc(database, "files", fileId);
        await updateDoc(documentRef, {parentId: newParentId})
    } catch (error) {
        console.error("Error updating document:", error);
    }
}

export const deletePost = async (post) => {
    try {
        const {id, filesPath} = post
        for (const path of filesPath) {
            deleteFilePath(path);
        }

        const docRef = doc(database, 'posts', id);
        await deleteDoc(docRef);
    } catch(error) {
        console.error("Could not delete post successfully: ", error)
    }
}

export const savePost = async (post_id, user_id) => {
    try {
        await addDoc(savedPost, {
            post_id: post_id,
            user_id: user_id
        })
    } catch(error) {
        console.error("Error occurred: ", error)
    }
}

export const removeSavedPost = async (saved_id) => {
    try {
        const docRef = doc(savedPost, saved_id)
        await deleteDoc(docRef);
    } catch(error) {
        console.error("Error occurred: ", error);
    }
}

export const addLike = async (post_id, user_id) => {
    try {
        await addDoc(likes, {
            post_id: post_id,
            user_id: user_id
        })
    } catch(error) {
        console.error("Error occurred: ", error);
    }
}

export const removeLike = async (like_id) => {
    try{
        const docRef = doc(likes, like_id)
        await deleteDoc(docRef)
    } catch(error) {
        console.error("Error occurred: ", error)
    }
}

export const addUser = async (user) => {
    try {
        await addDoc(users, user)
    } catch(error) {
        console.log(error);
    }
}

export const fetchFilesByParentId = async (parentId) => {
    try {
        // Reference to the collection where files are stored

        // Create a query against the collection
        const q = query(files, where("parentId", "==", parentId));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Extract and return the file data
        const filesFetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return filesFetched;
    } catch (error) {
        console.error("Error fetching files: ", error);
        throw error;
    }
};