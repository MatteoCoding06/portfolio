// app/contact/page.tsx
import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/contactInfo"; // Assicurati di avere questo file con le info di contatto

export default function ContactPage() {
  // Array per le card delle info di contatto

  // Array per i link social
  const socialLinks = [
    { icon: "public", href: "#" },
    { icon: "share", href: "#" },
    { icon: "link", href: "#" },
  ];

  return (
    <main className="max-w-7xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <div className="relative overflow-hidden glass-card p-8 md:p-16 mb-12 border-primary/20">
          {/* Pattern a pallini in background */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #be5fed 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Lets build something{" "}
              <span className="purple-gradient-text">extraordinary</span>{" "}
              together.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Have a project in mind or just want to say hello? My inbox is
              always open. Lets navigate your next digital transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all dark:text-white appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Freelance Work</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me more about your project..."
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                {/* Utilizziamo il componente Button creato precedentemente! */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    icon="send"
                    className="w-full flex justify-center"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Info Cards Mappate con Animazione */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  // 1. Aggiunto "group" e "cursor-pointer" alla card
                  className="glass-card p-6 flex items-start gap-4 group cursor-pointer"
                >
                  {/* 2. Riquadro quadrato perfetto (w-12 h-12) con icona centrata (flex items-center justify-center) */}
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px] leading-none">
                      {info.icon}
                    </span>
                  </div>

                  <div>
                    {/* 3. Aggiunto l'effetto colore al titolo al passaggio del mouse */}
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>

                    {info.details.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm text-slate-500 dark:text-slate-400"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            {/* <div className="rounded-2xl overflow-hidden glass-card h-48 relative group cursor-pointer border-primary/20 p-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYvfRaAnvWGMS4qRsIW6DTc1RtyZdEIHnbVuW-EsSiB6P-mmRD2lnR8pSLRvnxqSnpTiCbAJp2y8eB8cQ0jIKW2h3RO1htWQtZYQm28jA9ea4D0dVw2Ijl_JCZXF4mU-GG7wTuFSxHPC_kwNzd8O9qQY1Q3yYNaB6vsSb-PcJiMJ5Cn84eQEVeWdXlu-7543ganNRhcP2305f2gw2MeoO0ePJoLaTxCLqnugXm73iZ-YR-kganaFmJFrAOoWIewcQ4rQ2pqqXGmSHw"
                alt="Map of San Francisco technology district"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-accent-purple">
                    location_on
                  </span>
                </div>
              </div>
            </div> */}

            {/* Social Links */}
            <div className="glass-card p-6 text-center md:text-left">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-4">
                Connect Socially
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent-purple hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
