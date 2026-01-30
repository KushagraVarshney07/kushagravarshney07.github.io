import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Kushagra Varshney
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-lg">Gurgaon, India</span>
          </div>
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-6 font-light">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Building scalable, AI-driven recruitment and assessment platforms with React, Node.js, PostgreSQL, AWS, and AI systems.
            <br />
            <span className="text-slate-500 text-lg mt-2 inline-block">
              Currently engineering production systems at Coffeee.io
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="https://github.com/KushagraVarshney07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium border-2 border-slate-900 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kushagra-varshney-a67b96230"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium border-2 border-slate-900 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium border-2 border-slate-900"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-6 text-slate-600">
            <a href="mailto:kushagravarshney123@gmail.com" className="hover:text-slate-900 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/KushagraVarshney07" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/kushagra-varshney-a67b96230" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
