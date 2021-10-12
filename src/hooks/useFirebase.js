import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/FirebasaeInitialization";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleprovider)

    }
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])
    return {
        signInWithGoogle,
        user,
        logout
    }

}
export default useFirebase;