import { Lightbulb, Scale, TestTube, Target } from 'lucide-react';

export default function ProblemSolving() {
  const approaches = [
    {
      icon: Target,
      title: "Engineering-First Mindset",
      description: "Every problem starts with understanding requirements, constraints, and success criteria. I define clear objectives before implementation, ensuring solutions align with business goals and technical realities."
    },
    {
      icon: Scale,
      title: "Trade-offs & Decision Making",
      description: "Real systems require balancing performance, accuracy, scalability, cost, and maintainability. I evaluate trade-offs explicitly—whether choosing between sync vs async processing, SQL vs NoSQL, or different AI models—making decisions based on measurable impact."
    },
    {
      icon: TestTube,
      title: "Testing & Validation",
      description: "Production systems demand rigorous testing. I practice API testing with Postman, manual testing for edge cases, and end-to-end validation before deployment. Testing isn't optional—it's how I ensure reliability and catch issues early."
    },
    {
      icon: Lightbulb,
      title: "Iterative Improvement",
      description: "Systems evolve based on feedback and metrics. I monitor performance, gather user input, and iterate on solutions. Whether optimizing database queries or refining UI flows, continuous improvement is part of the process."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Problem-Solving Approach</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          Building production systems requires more than writing code. It demands clear thinking about trade-offs,
          thorough testing, and a commitment to delivering solutions that work in the real world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <approach.icon className="w-10 h-10 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{approach.title}</h3>
              <p className="text-slate-700 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Production-Ready Thinking</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            I approach development with maturity and awareness of production constraints. This means:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>Anticipating edge cases and failure modes during design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>Writing defensive code that handles errors gracefully</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>Documenting decisions and maintaining clean code for team collaboration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>Considering operational concerns like monitoring, logging, and debugging</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>Validating assumptions through testing before committing to implementations</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
