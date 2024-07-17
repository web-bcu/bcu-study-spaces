import { database } from "@/app/firebaseconfig"
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { deleteFile } from "./firestore";

export const deleteFolder = async (folderId) => {
    try {
        const q = query(collection(database, "files"), where("parentId", "==", folderId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (singleDoc) => {
            const documentRef = doc(database, "files", singleDoc.id);
            const documentSnapshot = await getDoc(documentRef);
            const documentData = documentSnapshot.data();
            console.log(documentData);
            if (documentData.isFolder === true) {
                deleteFolder(singleDoc.id);
                await deleteDoc(doc(database, "files", singleDoc.id));
            }
            else {
                await deleteFile(documentData.filePath, singleDoc.id);
            }
        });
        await deleteDoc(doc(database, "files", folderId));
    }
    catch (error) {
        console.error("Error deleting documents: ", error);
    }
}