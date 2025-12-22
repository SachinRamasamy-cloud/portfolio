import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

  // Replace with your actual links
  const contactInfo = {
    email: "sachin.ramsamy@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-slate-950 overflow-hidden text-slate-300">
      
      {/* --- Background Gradients --- */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">together.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I'm currently looking for new opportunities as a Front-End Developer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          
          {/* --- LEFT COLUMN: Social Links & Info --- */}
          <div className="space-y-8">
            
            <h3 className="text-2xl font-bold text-white">Connect with me</h3>
            <p className="text-slate-400">
              Feel free to reach out via email or connect on social media. I am always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              
              {/* Email Card */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">Email Me</h4>
                  <p className="text-sm text-slate-500">{contactInfo.email}</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                  <p className="text-sm text-slate-500">Professional Profile</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-purple-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">GitHub</h4>
                  <p className="text-sm text-slate-500">View my Code</p>
                </div>
              </a>

            </div>
          </div>


          {/* --- RIGHT COLUMN: Contact Form --- */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-2xl relative">
             {/* Form Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>

             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               
               {/* Name Input */}
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                 <input 
                   type="text" 
                   id="name"
                   placeholder="John Doe" 
                   className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                 />
               </div>

               {/* Email Input */}
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                 <input 
                   type="email" 
                   id="email"
                   placeholder="john@example.com" 
                   className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                 />
               </div>

               {/* Message Input */}
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                 <textarea 
                   id="message"
                   rows="4" 
                   placeholder="Hi, I'd like to discuss a project..." 
                   className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                 ></textarea>
               </div>

               {/* Submit Button */}
               <button 
                 type="submit"
                 className="w-full group relative flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
               >
                 <span>Send Message</span>
                 <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>

             </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sachin Ramsamy. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;