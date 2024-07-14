import { useEffect, useState } from "react";

import { database } from "@/app/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";

const files = collection(database, 'admin');

export const FetchAdmins = () => {
    const [admins, setAdmins] = useState([]);

    const getAdmins = () => {
        onSnapshot(files, (response) => {
            setAdmins(
                response.docs
                    .map((item) => {
                        return {...item.data(), id: item.id};
                    }
                ).map((obj) => obj.email)
            )
        })
    }

    useEffect(() => {
        getAdmins()
    }, []);

    return {admins};
}