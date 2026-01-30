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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">View Live</span>
                </a>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Problem Statement</h4>
                  <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                  <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Learnings</h4>
                  <ul className="space-y-1">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
