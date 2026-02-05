import { Award, Code2, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Code2,
      title: "400+ DSA Problems Solved",
      description: "Solved over 400 data structures and algorithms problems across LeetCode, GeeksforGeeks, and Coding Ninjas. Focus on array manipulation, tree traversals, dynamic programming, and graph algorithms.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "2nd Rank – District Level Mathematics Olympiad",
      description: "Secured 2nd position at the District Level Mathematics Olympiad, demonstrating strong analytical and problem-solving capabilities in competitive mathematics.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-primary-50 to-slate-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-4 flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${achievement.color}/10 dark:from-dark-800/50 dark:to-dark-800/30 rounded-2xl border-2 border-opacity-30 dark:border-opacity-20 shadow-lg hover:shadow-2xl dark:hover:shadow-lg dark:hover:shadow-primary-500/20 transition-all duration-500 p-8 card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 shadow-lg dark:shadow-lg dark:shadow-${achievement.color.split(' ')[1]}/30 hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{achievement.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
