import Link from "next/link";
import Image from "next/image";
import GetInTouch from "./components/getintouch";
import Button from "./components/button";
import { toolkit } from "@/data/toolkit";
import { projects } from "@/data/projects";
export default function Home() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "40+", label: "Projects Done" },
    { number: "12", label: "Happy Clients" },
    { number: "5", label: "Global Awards" },
  ];

  return (
    <>
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
                Hi, I&apos;m{" "}
                <span className="purple-gradient-text">Matteo</span>, a
                developer from Italy
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
                  I am a Fullstack Developer fueled by a deep passion for
                  computer science. While I build systems from the ground up, my
                  true focus lies in frontend development and UI/UX design.
                </p>
                <p>
                  To me, coding is a creative process. I love translating
                  complex logic into elegant interfaces, blending clean code
                  with thoughtful design to build digital experiences that are
                  both beautiful and functional.
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
            {projects.slice(0, 2).map((project, index) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Technical Toolkit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {toolkit.map((skill) => {
              // Assegniamo l'icona a una variabile con l'iniziale MAIUSCOLA.
              // Questo fa capire a React che è un Componente e non un tag HTML!
              const IconComponent = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="glass-card group flex flex-col items-center p-6 cursor-pointer"
                >
                  <div className="size-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all duration-300">
                    <div className="text-accent-purple flex items-center justify-center text-3xl">
                      {/* Ora la stampiamo qui, passandole direttamente le classi che vogliamo! */}
                      <IconComponent />
                    </div>
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Get in Touch */}
        <GetInTouch />
      </main>
    </>
  );
}
