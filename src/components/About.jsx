export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-primary-50 to-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p className="card-glass animate-stagger-1 text-gray-700">
            Currently a <span className="font-bold text-primary-700">Full-Stack Developer at Coffeee.io</span>, where I work on AI-driven recruitment and assessment platforms that handle real-world hiring workflows at scale.
          </p>

          <p className="card-glass animate-stagger-2 text-gray-700">
            My focus is on backend systems, scalability, and production constraints. I've built systems that evaluate resumes against job descriptions, process bulk comparisons asynchronously using AWS infrastructure, and implement advanced proctoring mechanisms for online assessments.
          </p>

          <p className="card-glass animate-stagger-3 text-gray-700">
            I've integrated AI services into production environments, migrating workloads from OpenAI to AWS Bedrock to optimize performance and reduce costs. My work spans the full stack—from designing React-based admin panels to architecting asynchronous pipelines with SQS and S3.
          </p>

          <p className="card-glass animate-stagger-4 text-gray-700">
            I prioritize clean, maintainable, and testable systems. Whether it's designing API contracts, handling edge cases, or ensuring data integrity, I approach problems with an engineering-first mindset that balances performance, accuracy, and long-term sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
