'use client'
import { auth, database } from "@/app/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    console.log(currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
    }, []);

    async function initializeUser(user) {
        if (user) {
            const docRef = doc(database, "users", user.uid);
            const getUser = await getDoc(docRef);
            // const q = query(collection(database, "users"), where("uid", "==", user.uid))
            // const querySnapshot = await getDocs(q);
            // const getUser = querySnapshot?.[0];
            // console.log(querySnapshot);
            const data = getUser.data()
            // const data = {...user}
            setCurrentUser(data);
            setUserLoggedIn(true);
        }
        else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {currentUser, userLoggedIn, loading}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}