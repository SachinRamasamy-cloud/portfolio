import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const ADMIN_USER = "admin";
        const ADMIN_PASS = "password123";

        if (username === ADMIN_USER && password === ADMIN_PASS) {
            localStorage.setItem('authToken', 'sachin-admin-token');
            navigate('/admin');
        } else {
            setError('Invalid credentials. Access denied.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Admin Login</h2>
                    <p className="text-slate-400 text-sm mt-2">Restricted access area</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">

                    {/* Username */}
                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Username</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus-within:border-cyan-500 transition-colors">
                            <FaUser className="text-slate-500" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="bg-transparent w-full text-white focus:outline-none placeholder-slate-600"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Password</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus-within:border-cyan-500 transition-colors">
                            <FaLock className="text-slate-500" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="bg-transparent w-full text-white focus:outline-none placeholder-slate-600"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
                    >
                        Access Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;