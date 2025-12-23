import React, { useEffect } from 'react';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLayerGroup, FaTools, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {

    const navigate = useNavigate();
    // --- STATIC DEMO DATA ---
    const project = {
        title: "NeonCart E-Commerce",
        description: "A high-performance, futuristic shopping platform built with the MERN stack. This application bridges the gap between traditional e-commerce and modern UX by implementing real-time inventory tracking, AI-driven product recommendations, and a seamless checkout process utilizing Stripe integration.",
        image: "https://placehold.co/1200x800/0f172a/06b6d4?text=Project+Preview+Image", // Placeholder image
        github: "https://github.com",
        demo: "https://example.com",
       features: [
            "Real-time Inventory Updates using Socket.io",
            "Secure Payment Processing with Stripe API",
            "Admin Dashboard with Interactive Analytics Charts",
            "Dark/Light Mode Theme Toggle with Persistence"
        ],
        stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Redux"]
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] w-full h-full bg-slate-950 overflow-y-auto animate-fade-in">

            {/* --- Sticky Header --- */}
            <div className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold uppercase tracking-wide"
                >
                    <FaArrowLeft /> Back to Portfolio
                </button>

                <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><FaExternalLinkAlt size={18} /></a>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-6xl">

                {/* --- Hero Section --- */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                        <span className="text-cyan-500">.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* --- Main Feature Image --- */}
                <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-16 border border-slate-800 shadow-2xl shadow-cyan-900/20 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Floating Stats Badge */}
                    <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                        <div className="bg-slate-900/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium flex items-center gap-2">
                            <FaLayerGroup className="text-cyan-400" /> Full Stack
                        </div>
                        <div className="bg-slate-900/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium flex items-center gap-2">
                            <FaTools className="text-purple-400" /> v1.0.0
                        </div>
                    </div>
                </div>

                {/* --- Grid Layout: Details vs Sidebar --- */}
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

                    {/* Left Column: The "Story" */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* The Challenge */}
                        <div className="bg-slate-900/30 border border-slate-800/50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Most task management apps are either too complex or too simple. I wanted to build a solution that bridges the gap—offering powerful features like drag-and-drop and real-time updates, but with a minimalist, distraction-free UI. The main technical hurdle was managing state synchronization across different users in real-time.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                            <FaCheckCircle size={14} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Feature {idx + 1}</h4>
                                            <p className="text-sm text-slate-400">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Gallery (Placeholder Grid) */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-48 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center group/img cursor-pointer">
                                    <div className="text-cyan-500 mb-2 opacity-50 group-hover/img:opacity-100 transition-opacity">
                                        <FaLayerGroup size={24} />
                                    </div>
                                    <span className="text-slate-500 text-sm font-medium">Dashboard View</span>
                                </div>
                                <div className="h-48 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center group/img cursor-pointer">
                                    <div className="text-purple-500 mb-2 opacity-50 group-hover/img:opacity-100 transition-opacity">
                                        <FaTools size={24} />
                                    </div>
                                    <span className="text-slate-500 text-sm font-medium">Admin Panel</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: The "Spec Sheet" */}
                    <div className="lg:col-span-1 space-y-8">

                        {/* Tech Stack Widget */}
                        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-6">Technologies</h3>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 text-sm text-cyan-200 bg-cyan-950/50 border border-cyan-800 rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4 border-t border-slate-800 pt-6">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all"
                                >
                                    <FaGithub /> View Code
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;