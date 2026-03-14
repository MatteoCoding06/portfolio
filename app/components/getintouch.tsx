import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="py-24">
      <div className="rounded-3xl purple-gradient-bg p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Lets work together
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Have a project in mind or just want to say hi? My inbox is always
            open. Lets build something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link
              className="h-14 px-10 rounded-xl bg-white text-background-dark font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
              href="mailto:hello@example.com"
            >
              Start a Conversation{" "}
              <span className="material-symbols-outlined">mail</span>
            </Link>
            <button className="h-14 px-10 rounded-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
