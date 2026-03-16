// app/projects/page.tsx
"use client";
import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const categories = ["All Work", "Web Design", "Mobile Apps", "Backend"];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack online store with real-time inventory management and secure payment integration.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR8Tx0G-A8E78wGQFXvhTo2aVhOuEty9gA87CBxnHPbjDExzFV9nFwtoKRce9kZi_mZgf18OONB4JbW3vykB-ueypJ1GVlH5R_Z7hIIY6TPjdzvTf4ObgKIPBc1YJM2Pstn8aMkJOwIdZJM0wp414ofhssaiIMvkUhBozWdl8yL9wY3Ur9gzqQgSnxr7UADBWe4v69nvLdJoHRWe7odHy1MX-6DL1N0P0i_KrObQCYiOdAovI_Sg6ecZPmNuGKUNt9BjlGENG_nOnp",
      tags: ["React", "Node.js", "Stripe"],
      alt: "Modern e-commerce dashboard with analytics graphs",
      category: "Web Design",
    },
    {
      title: "Fitness Tracker",
      description:
        "Real-time workout monitoring and health analytics with Apple HealthKit integration.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA096IEzMYFz849HIiCStkYnqWiKxXo9N8nK9MrOXwD19USyU-4s96oUUHANU7gWtczHPBeAqt7J1q4Bh1qfyvsDjipuWdWujF3mCDlY6yi5CrHlic7qQZQ0BzLdsx2NsxvKVwUv9ZOetVRMyxcIbwzuXDmWAjY-iuB3Pi3USuyjJK-kiqPvCW50aJ28As4ZApJhRf72ZEjkIRxt3cp1VYt4D3GWuVXHCiKslaez3OQ4SH4MsTXNzmsuxzbAs0OqHM-g_JMQu6KWWyA",
      tags: ["Swift", "Firebase", "HealthKit"],
      alt: "Fitness mobile application showing heart rate and steps",
      category: "Mobile Apps",
    },
    {
      title: "AI Chatbot",
      description:
        "Natural language processing interface designed for automated customer support and lead generation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBn0ZeWEIWgKP0p0qJ-Qy1ufsvjvFZusEl-4-gkz1kPnYl0vBmInCZ4U5AlkUl7vmC1VrcyzzK9J5QeM5DwgOBVCOyR1LxA4cBVumZmpTuQWsaqiLQltUb-oahngiMZ6OHSPMLDb_pZL-Yrhl58XTJDAwjCJX6SkhIWD1B0nweqzHMTrKTL9Z2fu1OWKMRVeivQ0-bZdjXNEXLF5ll7VQYj0E-zAEOU36xRORNQfa2JaehVX6x36UjU9rgU3yzKttDURw-ykHCXFdaD",
      tags: ["Python", "OpenAI", "FastAPI"],
      alt: "Artificial intelligence glowing neural network visualization",
      category: "Backend",
    },
    {
      title: "Finance Dashboard",
      description:
        "Modern financial data visualization platform for crypto and stock portfolio management.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnzXUb-nBYwfSFCEXfTixt_ENqSDDmTcL9XIl7ELcgcVgaISb1ugmZKh6TwZiab0Tl3o7rYlDAvTYZ6h_XrFG7G-31FFdM3BPImd2IEYLvrxzoP3aB0U70aWD3fhVijRT3TDRTykSvGIVkptyzosteHEGEV8goHTIZ_BKV7XTtBkAZ9u3BFSOl9IIbQTL978DEHG960T_NNeNeOaHBOPBmVMcVpxrGXHitnpJqoQeNqdSOxycS8ZAenNE5zZidsXT2p11_aouvfHsb",
      tags: ["Vue.js", "D3.js", "AWS"],
      alt: "Complex financial dashboard with charts and tables",
      category: "Web Design",
    },
    {
      title: "Project Alpha",
      description:
        "Experimental UI kit and design system focused on high-performance web applications.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2GqMENZBlMMuuZwTvpAlbg96vtTX0U_YpSryhW4Hs6QTqhy62pJF_UeAPOgCKKlRa9AESDPtyw1pvF03erAOp0VbP0FoXAEqyi59dACeloZHKWm0KGJCvHMnEm10poFgtngJIaR4NEI40ZZwZHZUYhzk6CxupKI-OPcX0fOjY-rBpUQPOIkhuHPkDHt9_z8NnLuIkQmVUU-E6glq19OFMEKaAuFFTuou4l2eW346noQQMCZGF4uO0xfsb9Jcq6Sfm2Fkfdz4CbZyY",
      tags: ["TypeScript", "Framer", "Tailwind"],
      alt: "Abstract UI design with floating elements and depth",
      category: "Web Design",
    },
    {
      title: "Cloud Sync",
      description:
        "Distributed file system with end-to-end encryption and lightning-fast sync speeds.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDezqGeyuWJhYsUc9d_MtEh6gr-gCHGujxBNoZZ0HArQGVxKrAARiceOrFZN5ukpidqu0Xcz45kHEmbPoeLGRCJSboJcxkKJ8Qrd64zVi1qFGUwGBlZDfV0nGJ8J9cE2GlaODFbxy2xmi9PQtDWmxr75dhfwgBTuYbW8fqPqDpZBNYLbd-Zs1Ugt3ii7f8DGFXnSMNthrGBFYaLRPUkkyzaZ-CDUXTMKh5Tnfy2cZ5Z0pWwXpbDH89JKDo4od7Ms4mfY9t-4UeBD90S",
      tags: ["Go", "Docker", "Kubernetes"],
      alt: "Modern coding IDE showing clean code snippets",
      category: "Backend",
    },
  ];

  const primarySkills = [
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "GraphQL",
  ];

  const filteredProjects =
    activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-12">
      {/* Intestazione Pagina */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">
          My Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          A curated selection of digital experiences, architectural systems, and
          experimental interfaces I've built recently.
        </p>
      </div>

      {/* Filtri */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 mb-8">
        <div className="flex gap-8 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex flex-col items-center justify-center border-b-2 pb-3 font-medium text-sm transition-all whitespace-nowrap outline-none ${
                activeFilter === category
                  ? "border-primary text-primary font-bold tracking-wide"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* <div className="flex gap-2 pb-3 hidden sm:flex">
          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
            <span className="material-symbols-outlined">view_list</span>
          </button>
        </div> */}
      </div>

      {/* Griglia Progetti - Ora usa filteredProjects invece di projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="group flex flex-col gap-4 p-4 glass-card"
          >
            <div className="overflow-hidden rounded-xl relative aspect-video">
              {/* <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              /> */}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                  {project.title}
                </h3>
                <span className="material-symbols-outlined text-primary text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 cursor-pointer">
                  arrow_outward
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
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
          </div>
        ))}

        {/* Messaggio se non ci sono progetti nella categoria (opzionale) */}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            Nessun progetto trovato per questa categoria.
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="mt-16 flex flex-col gap-6 p-8 glass-card">
        <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">
          Primary Expertise
        </h4>
        <div className="flex flex-wrap gap-4">
          {primarySkills.map((skill) => (
            <div
              key={skill}
              className="flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-200 dark:bg-slate-800 px-5 hover:bg-primary transition-colors cursor-pointer"
            >
              <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
