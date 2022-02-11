import {useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);
    const {dispatch} = useAuthContext();

    const signUp = async (email, password, displayName) => {
        setError(null);
        setPending(true);
        try {
            //sign up user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            if (!res) {
                throw Error('could not do sign up')
            }
            //add displayname
            await res.user.updateProfile({displayName})

            //dispatch

            dispatch({type: 'LOGIN', payload: res.user})

            setPending(false);
            setError(null)

        } catch (e) {
            console.log(e);
            setError(e.message);
            setPending(false)
        }

    }

    return {error, pending, signUp}


}