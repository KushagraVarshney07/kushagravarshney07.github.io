import { Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-primary-50 to-slate-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-warm rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-float-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-down">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/40 dark:to-primary-800/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200/50 dark:border-primary-700/50">
              <Sparkles className="w-4 h-4" />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 animate-fade-in-up">
            <span className="block mb-2 text-gray-900 dark:text-white">Kushagra</span>
            <span className="gradient-text animate-pulse">Varshney</span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-8 animate-stagger-1">
            <Mail className="w-5 h-5 animate-bounce-subtle" />
            <span className="text-lg font-medium">Gurgaon, India</span>
          </div>

          <div className="mb-12 animate-stagger-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-700 dark:text-gray-200">Full-Stack Developer</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 text-2xl mt-2">Crafting Scalable AI Solutions</span>
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-stagger-3">
            Building scalable, AI-driven recruitment and assessment platforms with React, Node.js, PostgreSQL, AWS, and cutting-edge AI systems.
          </p>
          <p className="text-md text-primary-600 dark:text-primary-400 font-semibold max-w-3xl mx-auto mb-12 animate-stagger-4">
            Currently engineering production systems at Coffeee.io
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-stagger-5">
            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="https://github.com/KushagraVarshney07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white dark:bg-dark-800 text-primary-700 dark:text-primary-300 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-primary-500/50 transition-all duration-300 font-semibold border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-400 flex items-center gap-2 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kushagra-varshney-a67b96230"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white dark:bg-dark-800 text-primary-700 dark:text-primary-300 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-primary-500/50 transition-all duration-300 font-semibold border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-400 flex items-center gap-2 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-dark-800 text-primary-700 dark:text-primary-300 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-primary-500/50 transition-all duration-300 font-semibold border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-400 hover:scale-105"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400 mb-16">
            <a href="mailto:kushagravarshney123@gmail.com" className="icon-hover text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 glow-element">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/KushagraVarshney07" target="_blank" rel="noopener noreferrer" className="icon-hover text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 glow-element">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/kushagra-varshney-a67b96230" target="_blank" rel="noopener noreferrer" className="icon-hover text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 glow-element">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center animate-bounce-subtle">
            <a href="#about" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors p-2 rounded-full hover:bg-primary-100/50 dark:hover:bg-primary-900/30">
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
