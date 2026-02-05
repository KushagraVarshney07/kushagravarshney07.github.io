import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "ReliefPC – Physiotherapy Management System",
      liveLink: "https://kushagravarshney07.github.io/ReliefPC-Frontend",
      description: "A full-stack MERN application designed for physiotherapists to manage patients, daily visits, and treatment records with real-world clinic workflow focus.",
      problem: "Physiotherapy clinics need efficient systems to track patient progress across multiple visits, manage treatment plans, and maintain comprehensive records without manual paperwork overhead.",
      solution: "Built a MERN-based management system with patient registration, visit tracking, treatment history, and progress monitoring. Designed with clinic workflows in mind, prioritizing ease of use and data integrity.",
      features: [
        "Patient registration and profile management",
        "Daily visit logging with treatment details",
        "Treatment history and progress tracking",
        "Session scheduling and reminders",
        "Secure authentication and data access control"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
      learnings: [
        "Designed database schema for medical record management",
        "Implemented secure authentication and role-based access",
        "Built responsive UI optimized for clinic workflows",
        "Handled real-world data validation and error cases"
      ]
    },
    {
      title: "CA Portfolio & Lead Generation Website",
      liveLink: "https://amitkrishanassociates.onrender.com/",
      description: "Professional website for a Chartered Accountant to showcase services, build credibility, and generate client leads with focus on clarity, responsiveness, and trust.",
      problem: "Chartered Accountants need an online presence that communicates expertise, builds trust with potential clients, and provides easy ways to inquire about services.",
      solution: "Developed a clean, professional website highlighting services, credentials, and client communication channels. Optimized for both desktop and mobile viewing with clear calls-to-action.",
      features: [
        "Service showcase with detailed descriptions",
        "Professional profile and credentials display",
        "Contact forms for lead generation",
        "Mobile-responsive design",
        "Fast loading performance"
      ],
      techStack: ["React.js", "Node.js", "HTML", "CSS", "Bootstrap"],
      learnings: [
        "Designed for conversion and trust-building",
        "Implemented responsive layouts for all devices",
        "Optimized performance for fast page loads",
        "Focused on clear information architecture"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-dark-800 dark:to-dark-800/50 rounded-2xl border border-primary-100 dark:border-primary-800 shadow-lg hover:shadow-2xl dark:hover:shadow-lg dark:hover:shadow-primary-500/20 transition-all duration-500 overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-1 bg-gradient-primary"></div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow-primary dark:hover:shadow-lg dark:hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{project.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm rounded-xl p-4 border border-primary-100 dark:border-primary-800">
                    <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-3 text-sm uppercase tracking-wide">Problem</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm rounded-xl p-4 border border-accent-100 dark:border-accent-800">
                    <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-3 text-sm uppercase tracking-wide">Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <span className="text-primary-600 dark:text-primary-400">★</span> Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="text-primary-500 dark:text-primary-400 mt-1 font-bold">+</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/40 dark:to-primary-800/40 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold border border-primary-200 dark:border-primary-800 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary-500/20 transition-all duration-300 hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-success-600 dark:text-success-400" /> Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {project.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="text-success-500 dark:text-success-400 mt-1 font-bold">•</span>
                          <span className="text-sm">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
