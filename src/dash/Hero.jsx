import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const myImageSource = "https://placehold.co/600x700/0f172a/ffffff?text=Sachin+Ramsamy";
  const resumeLink = "/resume.pdf";

  const roles = [
    "Front-End Developer",
    "UI/UX Designer", 
    "MERN Stack Developer",
    "Creative Thinker"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);

    }, 3000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* --- Optimized Background Animation --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/20 blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      {/* --- Content Container --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Text --- */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start animate-fade-in-up">
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-400 text-xs font-semibold tracking-wide shadow-xl backdrop-blur-md">
                 Fresher & Ready to Build
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-slate-300">
                    Hello, I'm
                </h2>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                        Sachin Ramsamy.
                    </span>
                </h1>
            </div>

            {/* Introduction with Dynamic Text */}
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate{' '}
              {/* Dynamic Fading Span */}
              <span 
                className={`text-white font-bold inline-block transition-all duration-500 ease-in-out transform ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {roles[currentRole]}
              </span>
              {' '}specializing in building responsive web applications with React and Tailwind CSS. Eager to turn complex problems into beautiful interfaces.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a 
                href={resumeLink} 
                download="Sachin_Ramsamy_Resume"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span className="flex items-center gap-2">
                    Download CV
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </span>
              </a>
              
               <button className="px-8 py-3.5 rounded-lg font-semibold text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                View My Projects
              </button>
            </div>
          </div>


          {/* --- Right Column: Image Frame --- */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative group w-full max-w-sm lg:max-w-md">
                
              {/* Back Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 shadow-2xl transform md:rotate-2 md:group-hover:rotate-0 transition-all duration-500 ease-out">
                 <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply z-10 pointer-events-none"></div>
                 
                 <img 
                   src={myImageSource} 
                   alt="Sachin Ramsamy" 
                   loading="eager"
                   fetchPriority="high"
                   className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-700"
                 />
                 
                 {/* Badge */}
                 <div className="absolute bottom-4 right-4 z-20 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-200">Open to Work</span>
                 </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;