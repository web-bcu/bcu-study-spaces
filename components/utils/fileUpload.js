import { storage } from "@/app/firebaseconfig"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addFiles } from "./firestore";

export const fileUpload = (file, setProgress, parentId) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        (error) => {
            alert(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                return addFiles(downloadURL, file.name, parentId);
            })
            .catch((error) => {
                console.error("Error adding files: ", error);
            });
        }
    )
}