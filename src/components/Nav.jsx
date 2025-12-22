import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- Logo --- */}
        <a href="#" className="text-2xl font-bold text-white tracking-tight group">
          Sachin
          {/* Dot accent matching your gradient theme */}
          <span className="text-cyan-400 group-hover:text-blue-500 transition-colors">.</span>
        </a>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              {/* Hover Underline Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* CTA Button */}
          <a 
            href="mailto:your.email@example.com"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg shadow-blue-900/10"
          >
            Hire Me
          </a>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close Icon
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {/* Absolute positioning to float over content */}
      <div 
        className={`absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all block"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-800" />
          <a 
            href="mailto:your.email@example.com"
            className="block text-center w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;