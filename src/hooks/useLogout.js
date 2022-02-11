import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import {projectAuth} from "../firebase/config";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);
    const {dispatch} = useAuthContext();

    const logOut = async () => {
        setError(null);
        setPending(true);
        try {
            await projectAuth.signOut();
            dispatch({type: 'LOGOUT'});
            setPending(false);
            setError(null);
            //dispatchlogout action
        } catch (e) {
            console.log(e.message);
            setPending(false);
        }
    }

    return {logOut};

}