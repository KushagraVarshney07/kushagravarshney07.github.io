import { Award, Code2 } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Code2,
      title: "400+ DSA Problems Solved",
      description: "Solved over 400 data structures and algorithms problems across LeetCode, GeeksforGeeks, and Coding Ninjas. Focus on array manipulation, tree traversals, dynamic programming, and graph algorithms."
    },
    {
      icon: Award,
      title: "2nd Rank – District Level Mathematics Olympiad",
      description: "Secured 2nd position at the District Level Mathematics Olympiad, demonstrating strong analytical and problem-solving capabilities in competitive mathematics."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <achievement.icon className="w-10 h-10 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h3>
              <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
