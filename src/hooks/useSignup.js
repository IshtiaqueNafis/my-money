import {useState} from "react";
import {projectAuth} from "../firebase/config";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);

    const signUp = async (email, password, displayName) => {
        setError(null);
        setPending(true);
        try {
            //sign up user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            if (!res) {
                throw new Error('could not do sign up')
            }
            //add displayname
            await res.user.updateProfile({displayName})
            setPending(false);

        } catch (e) {
            console.log(e);
            setError(e.message);
            setPending(false)
        }

    }

    return {error, pending, signUp}


}