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
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Technical Skills</h2>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.category}</h3>
              <p className="text-slate-600 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="border-l-4 border-slate-300 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">{skill.name}</h4>
                    <p className="text-slate-600 text-sm">{skill.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
