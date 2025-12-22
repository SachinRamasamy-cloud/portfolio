import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  // Default to the first item (index 0)
  const [activeId, setActiveId] = useState(0);

  // --- DATA: Replace this with your actual details ---
  const experiences = [
    {
      id: 0,
      type: "work", // or 'education'
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "Jan 2024 - Present",
      location: "Bangalore, India",
      description: "Collaborated with the senior dev team to rebuild the client dashboard using React 18.",
      achievements: [
        "Reduced page load time by 40% using Lazy Loading.",
        "Implemented a reusable component library with Tailwind CSS.",
        "Fixed 20+ critical bugs in the legacy code base."
      ],
      stack: ["React", "Redux", "JIRA", "Tailwind"]
    },
    {
      id: 1,
      type: "project",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Jun 2023 - Dec 2023",
      location: "Remote",
      description: "Built custom websites for small business owners, focusing on SEO and responsiveness.",
      achievements: [
        "Delivered 3 full-stack websites for local clients.",
        "Integrated Stripe payment gateways for an e-commerce client.",
        "Achieved 100/100 Lighthouse performance scores."
      ],
      stack: ["Next.js", "Firebase", "Stripe"]
    },
    {
      id: 2,
      type: "education",
      role: "Bachelor of Technology (CSE)",
      company: "University of Engineering",
      period: "2019 - 2023",
      location: "Chennai, India",
      description: "Major in Computer Science. Graduated with First Class Distinction.",
      achievements: [
        "Final Year Project: AI-driven Attendance System.",
        "Core Member of the College Coding Club.",
        "CGPA: 8.5/10"
      ],
      stack: ["Data Structures", "Algorithms", "Java", "Python"]
    }
  ];

  const activeExp = experiences[activeId];

  return (
    <section id="experience" className="relative w-full py-20 bg-slate-950 overflow-hidden text-slate-300">
      
      {/* --- Background Ambience --- */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">My Journey</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Education</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* --- LEFT COLUMN: Flow Chart / Timeline Selector --- */}
          <div className="w-full md:w-1/3 flex flex-col relative">
            {/* The Vertical Line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800 hidden md:block"></div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  onClick={() => setActiveId(index)}
                  className={`group relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeId === index 
                      ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-900/20" 
                      : "bg-transparent border-transparent hover:bg-slate-900/50 hover:border-slate-800"
                  }`}
                >
                  {/* Timeline Dot (Visual Anchor) */}
                  <div className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeId === index ? "bg-cyan-500 border-cyan-200 scale-125" : "bg-slate-800 border-slate-600 group-hover:border-cyan-500/50"
                  }`}></div>

                  {/* Summary Text */}
                  <div className="flex-grow">
                    <h4 className={`font-bold text-sm transition-colors ${activeId === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                      {exp.role}
                    </h4>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>

                  {/* Arrow for active state */}
                  {activeId === index && (
                    <div className="hidden md:block absolute -right-2 w-4 h-4 bg-slate-900 border-t border-r border-cyan-500/50 transform rotate-45"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Detail Panel --- */}
          <div className="w-full md:w-2/3">
            <div 
              key={activeId} // Key change forces React to re-trigger the animation
              className="relative h-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 animate-fade-in shadow-2xl"
            >
              {/* Decorative Gradient on Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-transparent rounded-t-2xl"></div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{activeExp.role}</h3>
                  <div className="flex items-center gap-2 text-cyan-400 font-medium">
                    {activeExp.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
                    <span>{activeExp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> {activeExp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {activeExp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {activeExp.description}
              </p>

              {/* Bullet Points */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {activeExp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Used */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {activeExp.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/20 border border-indigo-500/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Simple Inline Animation style for the fade effect */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;