const categoryColors = {
  "Languages": { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-400", icon: "text-blue-600" },
  "Backend": { bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-400", icon: "text-violet-600" },
  "Frontend": { bg: "from-rose-500/10 to-pink-500/10", border: "border-rose-400", icon: "text-rose-600" },
  "Databases & Cloud": { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-400", icon: "text-emerald-600" },
  "AI / ML": { bg: "from-amber-500/10 to-orange-500/10", border: "border-amber-400", icon: "text-amber-600" },
  "Tools": { bg: "from-indigo-500/10 to-blue-500/10", border: "border-indigo-400", icon: "text-indigo-600" }
};

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      description: "Core programming languages used for algorithm design, backend logic, and application development.",
      skills: [
        { name: "JavaScript", usage: "Primary language for full-stack development, async operations, and API design" },
        { name: "C++", usage: "Used for data structures, algorithms, and performance-critical operations" },
        { name: "Java", usage: "Object-oriented programming and enterprise application development" }
      ]
    },
    {
      category: "Backend",
      description: "Server-side technologies for building scalable APIs and business logic.",
      skills: [
        { name: "Node.js", usage: "Runtime for building async APIs, handling concurrent requests, and server-side logic" },
        { name: "Express.js", usage: "Web framework for RESTful API design, middleware management, and routing" }
      ]
    },
    {
      category: "Frontend",
      description: "Client-side technologies for building responsive and interactive user interfaces.",
      skills: [
        { name: "React.js", usage: "Component-based UI development, state management, and admin panel creation" },
        { name: "HTML/CSS", usage: "Semantic markup and styling for responsive layouts" },
        { name: "Bootstrap", usage: "Rapid UI development with responsive grid systems and components" }
      ]
    },
    {
      category: "Databases & Cloud",
      description: "Data persistence and cloud infrastructure for scalable applications.",
      skills: [
        { name: "PostgreSQL", usage: "Relational database for structured data, complex queries, and transactions" },
        { name: "MongoDB", usage: "NoSQL database for flexible schemas and document-based storage" },
        { name: "Redis", usage: "In-memory caching for performance optimization and session management" },
        { name: "AWS S3", usage: "Object storage for file uploads, resumes, and static assets" },
        { name: "AWS SQS", usage: "Message queuing for async processing pipelines and background jobs" }
      ]
    },
    {
      category: "AI / ML",
      description: "AI services integrated into production systems for intelligent features.",
      skills: [
        { name: "AWS Bedrock", usage: "Claude models for AI-powered resume analysis and JD generation" },
        { name: "OpenAI", usage: "GPT models for natural language processing and content generation" }
      ]
    },
    {
      category: "Tools",
      description: "Development tools for version control, API testing, and project management.",
      skills: [
        { name: "GitHub", usage: "Version control, collaboration, and CI/CD workflows" },
        { name: "VS Code", usage: "Primary IDE for development with extensions and debugging" },
        { name: "Postman", usage: "API testing, request validation, and documentation" },
        { name: "Jira", usage: "Project management, sprint planning, and issue tracking" },
        { name: "Cursor", usage: "AI-assisted coding and development workflow optimization" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => {
            const colors = categoryColors[category.category];
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl border-l-4 ${colors.border} card-hover p-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{category.category}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-105"
                    >
                      <h4 className={`font-bold text-lg mb-2 ${colors.icon}`}>{skill.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
