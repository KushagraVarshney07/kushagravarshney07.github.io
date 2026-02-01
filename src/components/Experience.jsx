import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  const achievements = [
    {
      title: "AI-Powered Resume Matching System",
      description: "Architected and developed a production-grade system that evaluates candidate resumes against AI-generated or uploaded job descriptions. The system ranks resumes based on compatibility, helping recruiters identify the best candidates efficiently.",
      details: [
        "Built with React, Node.js, and PostgreSQL for accuracy and scalability",
        "Implements intelligent scoring algorithms for resume-JD matching",
        "Processes multiple resume formats and extracts structured data",
        "Currently used in production by recruitment teams"
      ]
    },
    {
      title: "Asynchronous JD–Resume Comparison Pipeline",
      description: "Designed and implemented an async processing pipeline to handle bulk resume comparisons without blocking user interactions or degrading system performance.",
      details: [
        "Leveraged AWS SQS for message queuing and AWS S3 for file storage",
        "Decoupled heavy processing from API responses for better UX",
        "Improved system reliability and throughput by 3x",
        "Handles concurrent requests efficiently with queue-based architecture",
        "Required to scale processing for hundreds of resumes per job posting"
      ]
    },
    {
      title: "Advanced Assessment Proctoring System",
      description: "Built a comprehensive proctoring system for online assessments that generates multiple dynamic red flags to detect suspicious behavior, anomalies, and rule-based violations during candidate evaluations.",
      details: [
        "Tracks user behavior patterns and detects anomalies in real-time",
        "Generates red flags for tab switches, copy-paste attempts, and timing irregularities",
        "Reduces manual review time and improves assessment integrity",
        "Provides detailed reports for each assessment with actionable insights",
        "Key engineering achievement demonstrating complex workflow automation"
      ]
    },
    {
      title: "AI Infrastructure Migration",
      description: "Led the migration of AI workloads from OpenAI models to AWS Bedrock (Claude), resulting in improved performance and cost optimization.",
      details: [
        "Evaluated trade-offs between OpenAI and AWS Bedrock for production use",
        "Redesigned API contracts and error handling for new AI service",
        "Reduced AI inference costs while maintaining quality",
        "Aligned AI infrastructure with existing AWS ecosystem",
        "Demonstrated architectural decision-making and system design maturity"
      ]
    },
    {
      title: "Panels & Admin Systems",
      description: "Developed comprehensive admin interfaces providing full visibility into hiring and assessment workflows.",
      details: [
        "Built candidate, recruiter, assessment, and admin panels with React",
        "Enabled operational control over the entire hiring lifecycle",
        "Designed intuitive interfaces for non-technical users",
        "Implemented role-based access control and audit logging"
      ]
    },
    {
      title: "Client Project – BathXpertz (Kajaria Tiles)",
      description: "Contributed to the BathXpertz 3D Bathroom Design Admin Panel as part of Coffeee.io's client work for Kajaria Tiles.",
      details: [
        "Built scalable frontend and backend features with React.js and Node.js",
        "Supported internal design workflows and operational management",
        "Collaborated with design and product teams to meet client requirements",
        "Delivered production-ready features on schedule"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-warm rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl border-2 border-primary-200 shadow-lg p-8 mb-12 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-primary-700 mb-3">Full-Stack Developer</h3>
              <div className="flex items-center gap-3 text-gray-600 mb-2">
                <Briefcase className="w-5 h-5 text-primary-600" />
                <span className="text-xl font-semibold text-gray-800">Coffeee.io</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-600 mt-4 md:mt-0 md:text-right bg-white/50 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <Calendar className="w-4 h-4 text-primary-600" />
                <span className="font-semibold text-gray-800">July 2024 – Present</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="font-semibold text-gray-800">Gurgaon, India</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Engineering AI-driven recruitment and assessment systems that handle real-world hiring workflows.
            Focus on building scalable backend architectures, async processing pipelines, and production-grade features.
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-primary-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-primary-700">{achievement.title}</h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed pl-10">{achievement.description}</p>
              <ul className="space-y-2 pl-10">
                {achievement.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary-500 font-bold mt-1">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
