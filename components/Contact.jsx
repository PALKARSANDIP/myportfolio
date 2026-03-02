"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useReveal } from "@/components/useReveal";

const contactLinks = [
  { icon: Mail, label: "Email", value: "sandippalkar72@gmail.com", href: "mailto:sandippalkar72@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "sandip-palkar-3a34b024b", href: "https://www.linkedin.com/in/sandip-palkar-3a34b024b/" },
  { icon: Github, label: "GitHub", value: "PALKARSANDIP", href: "https://github.com/PALKARSANDIP" },
  { icon: Phone, label: "Phone", value: "+91 876 7505569", href: "tel:+918767505569" },
];

export default function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:sandippalkar72@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">05.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">Contact</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <div className="reveal text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-5">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto">
            I&apos;m currently open to new opportunities. Got a project idea or just want to chat? Let&apos;s connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="reveal font-display font-semibold text-gray-900 dark:text-white text-xl mb-6">
              Reach Out Directly
            </h3>
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`reveal delay-${i + 1} flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800
                  hover:border-accent dark:hover:border-accent bg-white dark:bg-white/[0.02]
                  group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-black/20`}
              >
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                  <link.icon size={16} className="text-accent group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-400 dark:text-gray-600 mb-0.5">{link.label}</div>
                  <div className="font-body text-sm text-gray-800 dark:text-gray-200">{link.value}</div>
                </div>
              </a>
            ))}
            <div className="reveal delay-5 flex items-center gap-2 mt-4 text-gray-500 dark:text-gray-600 px-1">
              <MapPin size={14} />
              <span className="font-body text-sm">Based in India 🇮🇳 · Available remotely 🌍</span>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="reveal font-display font-semibold text-gray-900 dark:text-white text-xl mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map(({ id, label, type, placeholder }, i) => (
                <div key={id} className={`reveal delay-${i + 1}`}>
                  <label className="font-mono text-xs text-gray-400 dark:text-gray-600 block mb-2 tracking-widest uppercase">{label}</label>
                  <input
                    type={type}
                    required
                    value={formData[id]}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700
                      bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white font-body text-sm
                      focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent/20
                      transition-all placeholder-gray-400 dark:placeholder-gray-600"
                  />
                </div>
              ))}

              <div className="reveal delay-3">
                <label className="font-mono text-xs text-gray-400 dark:text-gray-600 block mb-2 tracking-widest uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Sandip, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700
                    bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white font-body text-sm
                    focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent/20
                    transition-all placeholder-gray-400 dark:placeholder-gray-600 resize-none"
                />
              </div>

              <div className="reveal delay-4">
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 font-display font-bold rounded-xl
                    transition-all duration-300 hover:scale-[1.02] active:scale-95
                    ${sent
                      ? "bg-green-500 text-white"
                      : "bg-accent text-black hover:bg-accent-dark hover:shadow-[0_8px_30px_rgba(0,255,148,0.35)]"
                    }`}
                >
                  {sent ? (
                    <><CheckCircle size={18} /> Message Opened in Mail!</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
