// app/projects/[slug]/page.tsx
import Button from "@/app/components/button"; // Controlla il path, di solito è "@/components/button" se hai spostato la cartella
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

// 1. Aggiungiamo type per indicare che params è una Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// 2. Aggiungiamo 'async' alla funzione
export default async function ProjectDetail({ params }: Props) {
  // 3. Usiamo 'await' per leggere i params prima di usarli
  const resolvedParams = await params;

  // 4. Ora cerchiamo il progetto usando lo slug risolto
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 max-w-5xl mx-auto w-full">
      {/* Tasto Indietro */}
      <div className="w-full flex justify-start mb-8">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-slate-500 hover:text-primary dark:hover:text-primary transition-colors font-medium group"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </div>

      {/* Project Hero Image con Glow Effect e Glass Card */}
      <div className="w-full mb-12 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-primary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-card p-2 md:p-3">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-dark">
            <Image
              src={project.image}
              alt={project.alt || `Immagine del progetto ${project.title}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="text-center space-y-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {project.liveDemo && (
            <Button
              href={project.liveDemo}
              variant="primary"
              icon="rocket_launch"
            >
              Live Demo
            </Button>
          )}

          {project.githubRepo && (
            <Button href={project.githubRepo} variant="secondary" icon="code">
              GitHub Repository
            </Button>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 pt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
