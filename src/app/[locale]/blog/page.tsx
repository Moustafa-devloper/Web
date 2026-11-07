export default function BlogPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-black">Blog</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {['Performance-first product thinking', 'Design systems that scale', 'The value of technical clarity'].map((post) => (
          <article key={post} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700" />
            <h2 className="text-xl font-bold">{post}</h2>
            <p className="mt-3 text-slate-300">Technical writing and product insights for teams building modern experiences.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
