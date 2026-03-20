import Button from "./button";

export default function GetInTouch() {
  return (
    <section className="py-24">
      <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Lets work together
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always
            open. Lets build something extraordinary.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              href="mailto:hello@example.com"
              variant="primary"
              icon="mail"
            >
              Start a Conversation
            </Button>

            <Button
              variant="secondary"
              // Se hai un file PDF del CV, puoi passarlo così: href="/tuo-cv.pdf" target="_blank"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
