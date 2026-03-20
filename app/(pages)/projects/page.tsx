// app/projects/page.tsx
"use client";
import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const categories = ["All Work", "Web Design", "Mobile Apps", "Backend"];

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
          experimental interfaces Ive built recently.
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
          <Link
            href={`/projects/${project.slug}`}
            key={project.title}
            className="group flex flex-col gap-4 p-4 glass-card"
          >
            <div className="overflow-hidden rounded-xl relative aspect-video">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
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
          </Link>
        ))}

        {/* Messaggio se non ci sono progetti nella categoria (opzionale) */}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            Nessun progetto trovato per questa categoria.
          </div>
        )}
      </div>
    </main>
  );
}
