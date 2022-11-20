import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';

export default function SignupForm() {
    const store = authStore();
    
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    }

    return (
        <form onSubmit={handleSignup}>
            <div>
            <label htmlFor="email">Email</label>
            <input 
                onChange={store.updateSignupForm} 
                value={store.signupForm.email}
                type="email" 
                name="email" 
                id="email" />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input 
                onChange={store.updateSignupForm} 
                value={store.signupForm.password}
                type="password" 
                name="password" 
                id="password" />
            </div>
            <button type="submit">Sign up</button>
        </form>
    )
}