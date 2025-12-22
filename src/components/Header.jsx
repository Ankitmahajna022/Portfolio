import React from 'react';
import { Mail, Github, FileText } from 'lucide-react';
import "./Header.css"

const Header = () => {
  return (
    <header className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-3xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ankit Mahajan
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          I'm a passionate Web Developer from Surat, Gujarat, with strong hands-on experience in building modern, 
          responsive, and scalable web applications. I specialize in front-end development using React.js and have 
          solid backend experience with Node.js, Express.js, and databases like MongoDB and Firebase.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:ankitmahajan2257@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>
          
          <a 
            href="https://github.com/Ankitmahajna022"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://pdflink.to/2a0fbdf0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            <FileText size={20} />
            <span>View Resume</span>
          </a>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-800">
          <div className="flex flex-wrap gap-8 text-gray-400">
            <div className="group cursor-pointer">
              <span className="text-sm text-gray-500">Based in</span>
              <p className="font-medium group-hover:text-blue-400 transition-colors">Surat, Gujarat</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-sm text-gray-500">Focus</span>
              <p className="font-medium group-hover:text-purple-400 transition-colors"> Full Stack</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-sm text-gray-500">Status</span>
              <p className="font-medium group-hover:text-green-400 transition-colors">Available for Projects</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;