import { User, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import { auth, database } from "./firebaseconfig";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

// export const signUpNewUser = async (email, password, name, avatar) => {
//     return createUserWithEmailAndPassword(auth, email, password);
// }
const users = collection(database, "users");

export const signUpNewUser = async (email, password, name, avatar) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const new_user = userCredential.user;

        const userData = {
            uid: new_user.uid,
            name: name,
            email: email,
            avatar: avatar,
            createdAt: new Date().toISOString(),
        };

        const userDocRef = doc(database, 'users', new_user.uid);
        await setDoc(userDocRef, userData);

        return userData;

    } catch (error) {
        return error;
    }
}

// export const signInUser = async (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
// }

export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDocRef = doc(database, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData;
        } else {
            console.log("Not Found");
            return { message: "Not Found" };
        }
    } catch (error) {
        return;
    }
}

export const signOutUser = () => {
    return auth.signOut();
}

export const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const passwordChange = (password) => {
    return updatePassword(auth.currentUser, password);
}

export const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}`,
    });
}