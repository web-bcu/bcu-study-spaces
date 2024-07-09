import { deleteObject, ref } from "firebase/storage";

import { database, storage } from "@/app/firebaseconfig";
import { collection, addDoc, deleteDoc } from "firebase/firestore";

const files = collection(database, 'files')

export const addFiles = async (fileLink, fileName, parentId) => {
    try {
        await addDoc(files, {
            fileLink: fileLink,
            fileName: fileName,
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

export const deleteFile = async (fileName, fileId) => {
    try {
        const fileRef = ref(storage, `files/${fileName}`);
        await deleteObject(fileRef);

        const docRef = doc(database, 'files', fileId);
        await deleteDoc(docRef);

        console.log("File deleted successfully");
    } catch (error) {
        console.error("Error deleting file:", error);
    }
}