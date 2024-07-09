import { deleteFile } from "./firestore"

export const deletingFile = async (fileName, fileId) => {
    await deleteFile(fileName, fileId);
}