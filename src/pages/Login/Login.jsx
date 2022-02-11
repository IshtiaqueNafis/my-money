import React, {useState} from 'react';
import styles from './Login.Module.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
            </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label>
                <span>Password</span>
            </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={[password]}/>
            <button className={'btn'}>Login</button>
        </form>
    );
};

export default LogIn;
