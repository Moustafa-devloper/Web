import { getLocaleMessages } from '@/i18n/request';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function LocaleHomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const messages = await getLocaleMessages(locale);
  const t = await getTranslations({ locale, messages, namespace: 'hero' });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-16 flex items-center justify-between">
          <div className="text-xl font-bold">Moustafa</div>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="/en">Home</Link>
            <Link href="/en/about">About</Link>
            <Link href="/en/projects">Projects</Link>
            <Link href="/en/blog">Blog</Link>
            <Link href="/en/contact">Contact</Link>
            <Link href="/en/admin" className="rounded-full border border-white/10 px-3 py-1.5">Admin</Link>
          </div>
        </nav>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1 text-sm text-primary-200">
              Senior Full-Stack Developer
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">{t('subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/en/projects" className="rounded-full bg-primary-500 px-6 py-3 font-medium text-white transition hover:bg-primary-400">
                {t('primaryCta')}
              </Link>
              <Link href="/en/contact" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-white/30">
                {t('secondaryCta')}
              </Link>
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm">
            <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">Current focus</p>
              <h2 className="mt-3 text-2xl font-bold">Products that convert.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="text-3xl font-black">7+</div>
                <div className="text-sm text-slate-300">Years experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="text-3xl font-black">30+</div>
                <div className="text-sm text-slate-300">Projects shipped</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
