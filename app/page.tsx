import Link from "next/link";
import Image from "next/image";
import GetInTouch from "./components/getintouch";
import Button from "./components/button";

export default function Home() {
  const toolkit = [
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "data_object" },
    { name: "NextJs", icon: "storage" },
    { name: "Tailwind CSS", icon: "palette" },
    { name: "TypeScript", icon: "terminal" },
    { name: "MySql", icon: "storage" },
  ];
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "40+", label: "Projects Done" },
    { number: "12", label: "Happy Clients" },
    { number: "5", label: "Global Awards" },
  ];

  const featuredProjects = [
    {
      title: "Nova Analytics Platform",
      description:
        "A high-performance analytics engine for e-commerce brands with real-time data visualization.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUe6vtSVx2ZyxQW8N12STxkGm42g8oEsY6p6Q2yFwTh26Zw-uRkuTwtDAvvhKVsL4hzIV40SJkKxRABSw258y_hv0d_vzEjv1M3zRKRKg4tL2V9JrFkCpYrFEtmcX59b62z9CITSM85YVao-mka3ZgrnFd3DkR1Vm-zhf6Ws1kkG_u-ONGlLHFVTjjno7F1NmJbW3gIXGs-ocYxZ-HBCtyPkDT37W32ozg40DAmvInCjj2Ic3PjxUE3oe7uAHGHtpuLNwOjaXKA6b6",
      alt: "Modern sleek SaaS dashboard UI interface",
      tags: ["React", "TypeScript", "D3.js"],
      link: "/projects/nova-analytics", // Predisposizione per la rotta dinamica
    },
    {
      title: "Vault Mobile Wallet",
      description:
        "Redefining personal finance with a focus on accessibility and security through biometric integration.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7GDyJi0grL2uCocb2Cq8Ek9GbqnKMzP7XMyETRiIbkU8DsCB6h7PWp6xBr44oENLpD7Ne9T3UoxfL-cUt-JXh571hX_MPD6H6Wb1FM4HpCKyUzg0W9Ia423oem7RtFKavAOT7SMR3MKH7Y6HMhCr8qej1_RaZbt1npqtU3M1ZjL4ujUfUS_JNPnf0_HlDtN_WcmLBuA-oQt3aKu3ZceaU4_IYTva30xUCa0bcHSs5Xi5nau05Jzfp2t7j9WivfROmUZI3ByPIc-H",
      alt: "Minimalist mobile app screens for banking",
      tags: ["React Native", "Node.js", "Figma"],
      link: "/projects/vault-wallet",
    },
  ];
  return (
    <>
      {/* Top Navigation Bar */}

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 ">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-purple/20 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Crafting <span className="purple-gradient-text">digital</span>{" "}
                experiences that matter.
              </h1>
              <p
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                style={{ color: "#666666" }}
              >
                Im a Full-stack Developer and UI Designer focusing on building
                high-performance, minimal, and functional web applications that
                solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 sm:justify-center md:justify-start lg:justify-start">
                <Button href="/projects" variant="primary" icon="arrow_forward">
                  View Work
                </Button>

                <Button href="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[500px]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-dark border border-primary/10">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUe6vtSVx2ZyxQW8N12STxkGm42g8oEsY6p6Q2yFwTh26Zw-uRkuTwtDAvvhKVsL4hzIV40SJkKxRABSw258y_hv0d_vzEjv1M3zRKRKg4tL2V9JrFkCpYrFEtmcX59b62z9CITSM85YVao-mka3ZgrnFd3DkR1Vm-zhf6Ws1kkG_u-ONGlLHFVTjjno7F1NmJbW3gIXGs-ocYxZ-HBCtyPkDT37W32ozg40DAmvInCjj2Ic3PjxUE3oe7uAHGHtpuLNwOjaXKA6b6"
                    alt="Laptop with code editor open, glowing with purple neon light"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  With over 5 years of experience in the tech industry, I
                  specialize in building scalable web applications and intuitive
                  user interfaces. I believe in the power of simplicity and
                  performance.
                </p>
                <p>
                  My journey started as a graphic designer, which gave me an eye
                  for aesthetics that I now bring to the logical world of
                  software engineering. I bridge the gap between form and
                  function.
                </p>
              </div>
            </div>
            {/* Statistiche Mappate */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-8 text-center group">
                  <div className="text-4xl font-black purple-gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-500" style={{ color: "#666666" }}>
                Selection of my favorite work from the past year.
              </p>
            </div>
            <Link
              className="text-white font-bold flex items-center gap-1 hover:text-primary transition-colors"
              href="/projects"
            >
              All Projects{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-surface-dark relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      View Case Study{" "}
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p
                  className="text-slate-500 mb-4 line-clamp-2"
                  style={{ color: "#666666" }}
                >
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Toolkit */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Toolkit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {toolkit.map((skill) => (
              <div
                key={skill.name}
                // 1. Aggiunto "group" per l'hover e lo stesso stile di card (bordo e sfondo)
                className="group flex flex-col items-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 dark:bg-surface-blue/20"
              >
                {/* 2. Sostituito lo sfondo dell'icona con uno viola che reagisce all'hover */}
                <div className="size-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all duration-300">
                  <span className="material-symbols-outlined !text-3xl text-accent-purple">
                    {skill.icon}
                  </span>
                </div>
                {/* 3. Aggiunto l'hover sul testo per completare l'effetto */}
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch */}
        <GetInTouch />
      </main>
    </>
  );
}
