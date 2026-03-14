// app/about/page.tsx
import GetInTouch from "@/app/components/getintouch";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // --- DATI ---
  const expertise = [
    {
      title: "Design",
      icon: "palette",
      skills: [
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
        "Brand Identity",
      ],
    },
    {
      title: "Frontend",
      icon: "code",
      skills: [
        "React / Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Performance Opt.",
      ],
    },
    {
      title: "Backend",
      icon: "database",
      skills: [
        "Node.js / Express",
        "PostgreSQL",
        "REST & GraphQL",
        "AWS / Cloud Ops",
      ],
    },
  ];

  const journey = [
    {
      role: "Senior Product Designer",
      period: "2021 — Present",
      company: "Innovate Labs, San Francisco",
      description:
        "Leading the design and frontend implementation of enterprise-level dashboard tools. Mentoring junior designers and establishing a unified company design system used across 4 separate product lines.",
      isActive: true,
    },
    {
      role: "Full Stack Developer",
      period: "2018 — 2021",
      company: "Creative Pulse Agency",
      description:
        "Developed over 20 custom web applications for high-profile clients in the tech and finance sectors. Specialized in creating fast, SEO-optimized React applications integrated with Headless CMS platforms.",
      isActive: false,
    },
    {
      role: "Junior UI Designer",
      period: "2016 — 2018",
      company: "Studio Pixel",
      description:
        "Started my journey focused on pixel-perfect UI execution and visual storytelling. Assisted in rebranding initiatives and high-fidelity prototyping for mobile applications.",
      isActive: false,
    },
  ];

  return (
    // Usa lo stesso max-w della Hero e Navbar per coerenza visiva
    <main className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-24 py-12">
      {/* Hero Bio Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="shrink-0 relative">
          <div className="relative aspect-square w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent-purple/30 shadow-2xl shadow-accent-purple/10">
            {/* <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8RLqvhWmdCpp-q7GQye59EtjFz3ehaTnJu21puS4jbi7ZG8Is_XXlQzxuswdx_oYcXSJ94bgtbEnhjDa8f7gMtddb2e2AbE0YdeFKLzC8MkSjAaFk083ucvzn1_m8sEnwrLiC-ES7flxneSP2i-SM8nAFYS6l194pmNjqe5QonR-gwprLV7SkDkm5h4YXMo89UoyyP3pR0ZO39SNUH4ySRZ9luAGBNGpdf2rBxr0RjeXBzusHiWnNy4mAPnMTF6G4SW7ute_3I3Y"
              alt="Close up portrait of a smiling professional designer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            /> */}
          </div>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, Im <span className="text-accent-purple">Alex Rivera</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 font-medium">
            Full-Stack Designer & Developer based in San Francisco
          </p>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a multidisciplinary creator focused on building harmonious
            digital experiences. With over 8 years of experience, I bridge the
            gap between complex backend logic and intuitive frontend design,
            ensuring every pixel serves a purpose.
          </p>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-accent-purple text-white px-6 py-3 rounded-lg font-bold hover:scale-[1.02] transition-transform">
              Download CV
            </button>
            <button className="border border-accent-purple text-accent-purple px-6 py-3 rounded-lg font-bold hover:scale-[1.02] transition-transform">
              Lets Talk
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-accent-purple rounded-full"></span>
          Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((item) => (
            // Applichiamo la tua amata glass-card qui!
            <div key={item.title} className="glass-card group p-8">
              <div className="w-12 h-12 bg-accent-purple/10 text-accent-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-accent-purple rounded-full"></span>
          Professional Journey
        </h2>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12">
          {journey.map((job, index) => (
            <div key={index} className="relative pl-8">
              {/* Pallino della timeline (viola se attivo, grigio se passato) */}
              <div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-background-light dark:border-background-dark ${job.isActive ? "bg-accent-purple" : "bg-slate-300 dark:bg-slate-700"}`}
              ></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {job.role}
                </h3>
                <span className="text-accent-purple font-semibold">
                  {job.period}
                </span>
              </div>
              <p className="text-slate-500 dark:text-[#666666] mb-4 font-medium italic">
                {job.company}
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />
    </main>
  );
}
