import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const inputRef = useRef(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current?.value.trim();

        if (!name) {
            console.log("No Name", name)
            return;
        }

        login(name);
        navigate('/profile');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter your Name"
                type="text"
                ref={inputRef}
            />
            <button type="submit">SetName</button>
        </form>
    );
}
