import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Full-Stack Developer</h3>
              <div className="flex items-center gap-2 text-slate-600 mb-2">
                <Briefcase className="w-5 h-5" />
                <span className="text-xl font-semibold">Coffeee.io</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-slate-600 mt-4 md:mt-0 md:text-right">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>July 2024 – Present</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gurgaon, India</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Engineering AI-driven recruitment and assessment systems that handle real-world hiring workflows.
            Focus on building scalable backend architectures, async processing pipelines, and production-grade features.
          </p>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h4>
              <p className="text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>
              <ul className="space-y-2">
                {achievement.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <span className="text-slate-400 mt-1">•</span>
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
