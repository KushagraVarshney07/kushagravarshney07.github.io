import { Lightbulb, Scale, TestTube, Target, Zap } from 'lucide-react';

const approachColors = {
  Target: "from-emerald-500 to-teal-500",
  Scale: "from-blue-500 to-cyan-500",
  TestTube: "from-violet-500 to-purple-500",
  Lightbulb: "from-amber-500 to-orange-500"
};

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
    <section className="py-24 bg-gradient-to-b from-white via-primary-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4 flex items-center gap-3">
            <Zap className="w-10 h-10 text-primary-600" />
            Problem-Solving Approach
          </h2>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl leading-relaxed">
            Building production systems requires more than writing code. It demands clear thinking about trade-offs,
            thorough testing, and a commitment to delivering solutions that work in the real world.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {approaches.map((approach, index) => {
            const colorGradient = approachColors[approach.icon.name] || "from-primary-500 to-primary-600";
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-primary-100 shadow-md hover:shadow-lg transition-all duration-300 p-8 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorGradient} flex items-center justify-center mb-5 shadow-md`}>
                  <approach.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-700 leading-relaxed">{approach.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border-2 border-primary-200 shadow-lg p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6 flex items-center gap-3">
            <Zap className="w-7 h-7" />
            Production-Ready Thinking
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I approach development with maturity and awareness of production constraints. This means:
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Anticipating edge cases and failure modes during design",
              "Writing defensive code that handles errors gracefully",
              "Documenting decisions and maintaining clean code for team collaboration",
              "Considering operational concerns like monitoring, logging, and debugging",
              "Validating assumptions through testing before committing to implementations"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white font-bold text-sm flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
