import React from 'react';

const Skills = () => {
  
  // Organized Data Array for clean rendering
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect user interfaces.",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      ]
    },
    {
      title: "Backend & Database",
      description: "Handling logic, APIs, and data storage.",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ]
    },
    {
      title: "Tools & Workflow",
      description: "Essential tools for version control and development.",
      skills: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, // Inverted for dark mode manually in CSS if needed, but original is fine
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative w-full py-20 bg-slate-950 overflow-hidden">
      
      {/* --- Background Ambient Glow (Matching Hero) --- */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">My Technical Arsenal</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            As a MERN Stack enthusiast, I work with a versatile range of tools to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20"
            >
              {/* Card Gradient Overlay (Invisible until hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Category Title */}
              <h3 className="relative text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                {category.title}
              </h3>
              <p className="relative text-sm text-slate-500 mb-6 group-hover:text-slate-400">
                {category.description}
              </p>

              {/* Icons Container */}
              <div className="relative flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group/icon">
                    <div className="w-12 h-12 p-2 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center transition-all duration-300 group-hover/icon:border-cyan-500/50 group-hover/icon:bg-slate-800/80 group-hover/icon:scale-110">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter grayscale group-hover/icon:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500 group-hover/icon:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;