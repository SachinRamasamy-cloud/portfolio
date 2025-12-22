import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaCoffee } from 'react-icons/fa';

const About = () => {
  
  // Stats to build credibility even as a fresher
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Hours of Coding', value: '1200+' }, // Estimate adds dedication
    { label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="about" className="relative w-full py-20 bg-slate-950 overflow-hidden text-slate-300">
      
      {/* --- Background Noise & Gradient --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: The Story --- */}
          <div className="space-y-8 animate-fade-in-left">
            
            {/* Header */}
            <div className="space-y-2">
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Who I Am</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                More than just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  lines of code.
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-lg leading-relaxed text-slate-400">
              <p>
                Hello! I'm <span className="text-white font-medium">Sachin Ramsamy</span>, a passionate Front-End Developer based in India. My journey into tech wasn't just about learning syntax; it was about the thrill of solving real-world problems through logic and design.
              </p>
              <p>
                As a fresher, I bring a unique blend of <span className="text-cyan-400">creative thinking</span> and technical discipline. I don't just write code that works; I strive to write code that is clean, maintainable, and accessible.
              </p>
              <p>
                When I'm not debugging in VS Code, you can find me exploring new UI trends on Dribbble, contributing to open-source, or fueling my creativity with a good cup of coffee.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
            
          </div>


          {/* --- RIGHT: Visual Interest Grid (Bento Style) --- */}
          <div className="relative">
             {/* Decorative blob behind the grid */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px]"></div>

             <div className="grid grid-cols-2 gap-4">
                
                {/* Card 1: Problem Solver */}
                <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                    <FaCode size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Problem Solver</h3>
                  <p className="text-xs text-slate-500">I love breaking down complex logic into simple, reusable components.</p>
                </div>

                {/* Card 2: Creative (Offset down) */}
                <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl translate-y-8">
                  <div className="w-10 h-10 bg-fuchsia-900/50 rounded-lg flex items-center justify-center mb-4 text-fuchsia-400">
                    <FaLightbulb size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Creative UI</h3>
                  <p className="text-xs text-slate-500">Obsessed with pixel-perfect designs and smooth user interactions.</p>
                </div>

                {/* Card 3: Fast Learner */}
                <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl -mt-8">
                  <div className="w-10 h-10 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                    <FaRocket size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Fast Learner</h3>
                  <p className="text-xs text-slate-500">Constantly adapting to new tech stacks like Next.js and Tailwind.</p>
                </div>

                {/* Card 4: Dedicated */}
                <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  <div className="w-10 h-10 bg-amber-900/50 rounded-lg flex items-center justify-center mb-4 text-amber-400">
                    <FaCoffee size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Dedicated</h3>
                  <p className="text-xs text-slate-500">Coding isn't just a job; it's a lifestyle. Powered by coffee.</p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;