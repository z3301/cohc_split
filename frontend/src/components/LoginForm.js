import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await store.login();

        // Navigate
        navigate('/');
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
            <label htmlFor="email">Email</label>
            <input 
                onChange={store.updateLoginForm} 
                value={store.loginForm.email}
                type="email" 
                name="email" 
                id="email" />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input 
                onChange={store.updateLoginForm} 
                value={store.loginForm.password}
                type="password" 
                name="password" 
                id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}