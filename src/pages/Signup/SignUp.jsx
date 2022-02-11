import {useState} from 'react'
import styles from './SIgnUp.module.css'
import {useSignUp} from "../../hooks/useSignup";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const {signUp, pending, error} = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(email, password, displayName);
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>sign up</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>display name:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>

            <button className="btn">Sign up</button>
            {pending && <button className="btn" disabled>loading</button>}
            {error && <p>{}</p>}
        </form>
    )
};
export default SignUp