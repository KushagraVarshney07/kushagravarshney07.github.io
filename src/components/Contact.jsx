import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kushagravarshney123@gmail.com",
      link: "mailto:kushagravarshney123@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7906715166",
      link: "tel:+917906715166",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kushagra-varshney",
      link: "https://www.linkedin.com/in/kushagra-varshney-a67b96230",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "KushagraVarshney07",
      link: "https://github.com/KushagraVarshney07",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      link: null,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-primary-50 to-slate-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title text-4xl md:text-5xl mb-6 inline-block">Let's Connect</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Open to opportunities involving real-world systems, backend-heavy full-stack roles, and AI-powered platforms.
            Reach out through any of these channels!
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${info.color}/5 dark:from-dark-800/50 dark:to-dark-800/30 rounded-2xl border-2 ${info.color.includes('gray') ? 'border-gray-300 dark:border-gray-700' : 'border-opacity-30 dark:border-opacity-20 border-white dark:border-gray-700'} shadow-lg hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-primary-500/20 transition-all duration-300 p-6 card-hover group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md dark:shadow-lg dark:shadow-${info.color.split(' ')[1]}/30`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-sm uppercase tracking-wide">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all font-semibold link-hover text-sm md:text-base word-break"
                  style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-gray-700 dark:text-gray-300 font-semibold block text-sm md:text-base">{info.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="mailto:kushagravarshney123@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-lg dark:hover:shadow-primary-500/50 transition-all duration-300 hover:scale-110 group"
          >
            <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
