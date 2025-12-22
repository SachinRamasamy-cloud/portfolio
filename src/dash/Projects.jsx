import React from 'react';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'; // Optional: for more specific logos

const Projects = () => {

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack shopping platform with user authentication, product search, and a functional shopping cart.",
            features: [
                "User Authentication (JWT)",
                "Admin Dashboard for Products",
                "PayPal/Stripe Integration",
                "Responsive Mobile Design"
            ],
            stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
            github: "https://github.com/yourusername/project1",
            demo: "https://project1-demo.com",
            image: "https://placehold.co/600x400/1e293b/cyan?text=E-Commerce+App"
        },
        {
            title: "Task Management App",
            description: "A Drag-and-Drop Kanban board to manage tasks, increase productivity, and track project progress.",
            features: [
                "Drag & Drop Interface",
                "Real-time Updates",
                "Dark/Light Mode Toggle",
                "Category Filtering"
            ],
            stack: ["React", "Firebase", "Tailwind", "Context API"],
            github: "https://github.com/yourusername/project2",
            demo: "https://project2-demo.com",
            image: "https://placehold.co/600x400/1e293b/cyan?text=Task+Manager"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application consuming open APIs to display forecasts, humidity, and wind speeds.",
            features: [
                "Live API Integration",
                "City Search & History",
                "5-Day Forecast Visuals",
                "Geolocation Support"
            ],
            stack: ["React", "OpenWeatherMap API", "CSS Modules"],
            github: "https://github.com/yourusername/project3",
            // demo: null, // Example of how to handle missing demo link
            image: "https://placehold.co/600x400/1e293b/cyan?text=Weather+App"
        }
    ];

    return (
        <section id="projects" className="relative w-full py-20 bg-slate-950 overflow-hidden text-slate-300">

            {/* --- Background Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] left-[10%] w-[25vw] h-[25vw] bg-cyan-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto mb-8">
                        A selection of my best work in MERN stack development.
                    </p>

                    {/* --- View All Button --- */}
                    <a
                        href="/all-projects" // Update this link to your actual projects page or GitHub
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                        <span className="text-sm font-semibold">View All Projects</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300 text-cyan-400" />
                    </a>
                </div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2"
                        >

                            {/* Image Section */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow p-6">

                                {/* Header */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                <div className="mb-6 flex-grow">
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-400">
                                                <span className="mr-2 text-cyan-500 mt-1">▹</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded border border-cyan-800/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons / Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        <FaGithub className="text-lg" />
                                        Code
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium ml-auto group/link"
                                        >
                                            <FaExternalLinkAlt className="text-sm group-hover/link:-translate-y-0.5 transition-transform" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;