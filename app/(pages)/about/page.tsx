// app/about/page.tsx
import Button from "@/app/components/button";
import GetInTouch from "@/app/components/getintouch";
import { journey } from "@/data/journey";
import { expertise } from "@/data/expertise";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    // Usa lo stesso max-w della Hero e Navbar per coerenza visiva
    <main className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-12">
      {/* Hero Bio Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="shrink-0 relative">
          <div className="relative aspect-square w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent-purple/30 shadow-2xl shadow-accent-purple/10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUe6vtSVx2ZyxQW8N12STxkGm42g8oEsY6p6Q2yFwTh26Zw-uRkuTwtDAvvhKVsL4hzIV40SJkKxRABSw258y_hv0d_vzEjv1M3zRKRKg4tL2V9JrFkCpYrFEtmcX59b62z9CITSM85YVao-mka3ZgrnFd3DkR1Vm-zhf6Ws1kkG_u-ONGlLHFVTjjno7F1NmJbW3gIXGs-ocYxZ-HBCtyPkDT37W32ozg40DAmvInCjj2Ic3PjxUE3oe7uAHGHtpuLNwOjaXKA6b6"
              alt="Close up portrait of a smiling professional designer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, Im <span className="text-accent-purple">Matteo Lombardi</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 font-medium">
            Developer & Designer from Italy
          </p>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a Fullstack Developer and multidisciplinary creator fueled by a
            lifelong passion for technology and hardware. I love diving into the
            mechanics of how things work under the hood, but my true focus lies
            in crafting intuitive frontend experiences. By bridging the gap
            between complex backend logic and thoughtful design, I ensure that
            every pixel serves a clear purpose.
          </p>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button href="/projects" variant="primary" icon="arrow_forward">
              View Work
            </Button>

            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
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
