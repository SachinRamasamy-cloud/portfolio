import React, { useState, useEffect } from 'react';

// You can use lucide-react or any icon library. 
// I have used inline SVGs here to ensure this works immediately without installing dependencies.

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // --- Data ---
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A full-stack analytics dashboard with real-time data visualization.",
      tags: ["React", "Tailwind", "Node.js"],
      color: "bg-blue-500"
    },
    {
      title: "SaaS Landing Page",
      desc: "High-converting landing page with modern animations and glassmorphism.",
      tags: ["React", "Framer Motion", "Tailwind"],
      color: "bg-purple-500"
    },
    {
      title: "Task Management App",
      desc: "Productivity tool featuring drag-and-drop kanban boards.",
      tags: ["TypeScript", "React", "Firebase"],
      color: "bg-emerald-500"
    }
  ];

  const skills = [
    "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Next.js", "UI/UX Design", "Git", "Figma"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            DevPortfolio.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left text-slate-300 hover:text-indigo-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Available for hire
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                experiences that matter.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              I am a Senior Front-End Developer specializing in building accessible, pixel-perfect, and performant web applications using React and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20">
                View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-semibold transition-all">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-slate-300 font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">A selection of projects that showcase my passion for clean code and user-centric design.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Image Placeholder */}
                <div className={`h-48 w-full ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-0 left-0 w-full h-48 flex items-center justify-center">
                   {/* Icon representing screenshot */}
                   <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-900 rounded-md text-xs font-medium text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            I'm currently available for freelance projects or full-time roles. 
            If you're looking for a developer to help bring your ideas to life, I'd love to hear from you.
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Send me an Email
          </a>

          <div className="mt-16 flex justify-center gap-8 border-t border-slate-700/50 pt-8">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-slate-500 hover:text-white transition-colors font-medium">
                {social}
              </a>
            ))}
          </div>
          <p className="mt-8 text-slate-600 text-sm">
            © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;