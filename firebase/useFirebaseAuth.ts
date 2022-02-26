import { useState, useEffect } from 'react'
import Firebase from "firebase/app";

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

// listen for Firebase state change
    useEffect(() => {
        const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading
    };
}