"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sandippalkar72@gmail.com",
    href: "mailto:sandippalkar72@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sandip-palkar-3a34b024b",
    href: "https://www.linkedin.com/in/sandip-palkar-3a34b024b/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "PALKARSANDIP",
    href: "https://github.com/PALKARSANDIP",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 876 7505569",
    href: "tel:+918767505569",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:sandippalkar72@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">05.</span>
          <span className="font-mono text-gray-500 dark:text-gray-500 text-sm tracking-widest uppercase">Contact</span>
          <div className="h-px flex-1 max-w-[80px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="font-body text-gray-600 dark:text-gray-400 mb-12 max-w-lg">
          I&apos;m currently looking for new opportunities. Whether you have a question, a project idea,
          or just want to say hi — my inbox is always open!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className={`space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-lg mb-6">
              Contact Info
            </h3>
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent dark:hover:border-accent bg-white dark:bg-white/[0.02] group transition-all duration-200 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                  <link.icon size={16} className="text-accent group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500 dark:text-gray-500 mb-0.5">{link.label}</div>
                  <div className="font-body text-sm text-gray-800 dark:text-gray-200">{link.value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-2 mt-6 text-gray-500 dark:text-gray-500">
              <MapPin size={14} />
              <span className="font-body text-sm">India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-lg mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-gray-500 dark:text-gray-500 block mb-2 tracking-widest uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white font-body text-sm focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-gray-500 dark:text-gray-500 block mb-2 tracking-widest uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white font-body text-sm focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-gray-500 dark:text-gray-500 block mb-2 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white font-body text-sm focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder-gray-400 dark:placeholder-gray-600 resize-none"
                  placeholder="Hello Sandip, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-black font-display font-semibold rounded-xl hover:bg-accent-dark transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
