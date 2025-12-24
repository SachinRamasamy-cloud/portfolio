import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-slate-950 pt-20 pb-8 border-t border-slate-800 overflow-hidden font-sans">
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Main Grid Layout (4 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Sachin<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              A MERN Stack developer building the future of the web, one pixel at a time. Available for freelance and full-time opportunities.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Services (New!) */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Frontend Development
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Backend Systems
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> UI/UX Implementation
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> API Integration
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="/resume.pdf" className="text-cyan-400 hover:underline">Download Resume</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Update (New!) */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Stay Updated</h3>
            <p className="text-slate-400 text-sm">
              Subscribe to my newsletter for the latest updates on my projects and tech articles.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
              />
              <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 text-sm">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-500 text-sm">
            <span>© {new Date().getFullYear()} Sachin Ramsamy.</span>
            <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse mx-1" /> & MERN
            </span>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Back to Top
            <span className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition-all">
              <FaArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;