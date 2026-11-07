export default function ProjectsPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-black">Projects</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {['Next.js SaaS', 'E-commerce Platform', 'Learning Platform'].map((project) => (
          <article key={project} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-primary-500/40 to-accent-500/40" />
            <h2 className="text-xl font-bold">{project}</h2>
            <p className="mt-3 text-slate-300">Premium product design and engineering for growth-focused brands.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
