export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">About</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Currently a <span className="font-semibold text-slate-900">Full-Stack Developer at Coffeee.io</span>, where I work on AI-driven recruitment and assessment platforms that handle real-world hiring workflows at scale.
          </p>
          <p>
            My focus is on backend systems, scalability, and production constraints. I've built systems that evaluate resumes against job descriptions, process bulk comparisons asynchronously using AWS infrastructure, and implement advanced proctoring mechanisms for online assessments.
          </p>
          <p>
            I've integrated AI services into production environments, migrating workloads from OpenAI to AWS Bedrock to optimize performance and reduce costs. My work spans the full stack—from designing React-based admin panels to architecting asynchronous pipelines with SQS and S3.
          </p>
          <p>
            I prioritize clean, maintainable, and testable systems. Whether it's designing API contracts, handling edge cases, or ensuring data integrity, I approach problems with an engineering-first mindset that balances performance, accuracy, and long-term sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
