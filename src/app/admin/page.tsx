export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-300">Admin</p>
            <h1 className="text-3xl font-black">Dashboard</h1>
          </div>
          <button className="rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white">
            New Project
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Visitors', '12.4K'],
            ['Projects', '34'],
            ['Messages', '18'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{label}</div>
              <div className="mt-3 text-3xl font-black">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
