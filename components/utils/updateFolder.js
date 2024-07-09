import { database } from "@/app/firebaseconfig"
import { doc, updateDoc } from "firebase/firestore"

export const updateFolder = async({folderId, folderName}) => {
    try {
        const documentRef = doc(database, "files", folderId);
        await updateDoc(documentRef, {folderName: folderName});
        console.log("Document updated successfully!");
    } catch (error) {
        console.error("Error updating document:", error);
    }
}