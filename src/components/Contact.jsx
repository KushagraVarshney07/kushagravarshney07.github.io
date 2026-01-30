import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kushagravarshney123@gmail.com",
      link: "mailto:kushagravarshney123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7906715166",
      link: "tel:+917906715166"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kushagra-varshney",
      link: "https://www.linkedin.com/in/kushagra-varshney-a67b96230"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "KushagraVarshney07",
      link: "https://github.com/KushagraVarshney07"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact</h2>
        <p className="text-lg text-slate-600 mb-12">
          Open to opportunities involving real-world systems, backend-heavy full-stack roles, and AI-powered platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <info.icon className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-600 hover:text-slate-900 transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-slate-600">{info.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:kushagravarshney123@gmail.com"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
