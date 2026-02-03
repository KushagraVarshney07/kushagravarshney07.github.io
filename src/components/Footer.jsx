export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 text-white py-12 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6 animate-fade-in-up">
          <p className="text-gray-300 dark:text-gray-400 text-lg font-semibold mb-2">
            © {new Date().getFullYear()} Kushagra Varshney
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Built with <span className="text-red-400 animate-pulse">❤️</span> using React, Tailwind CSS, and modern web technologies
          </p>
        </div>
        <div className="flex justify-center gap-2 text-gray-500 dark:text-gray-600 text-sm">
          <span>|</span>
          <a href="#projects" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300">Work</a>
          <span>|</span>
          <a href="#skills" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300">Skills</a>
          <span>|</span>
          <a href="#contact" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300">Contact</a>
          <span>|</span>
        </div>
      </div>
    </footer>
  );
}
