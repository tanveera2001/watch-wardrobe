export function HomeCTA() {
  return (
    <section className="px-24 py-28">
      <div className="overflow-hidden rounded-3xl bg-slate-900 px-12 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-400">
          Watch Wardrobe
        </p>

        <h2 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-white">
          Your watch collection deserves a wardrobe.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          Build your collection, showcase your watches, discover new pieces, and
          find your next favorite watch with Watch Wardrobe.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          {/* FUTURE FEATURE */}
          <span className="rounded-full bg-white/10 px-7 py-3 text-sm font-medium text-white">
            Collection — Coming Soon
          </span>

          {/* CURRENT / FUTURE DEPENDING ON ROUTE */}
          <a
            href="/watches"
            className="rounded-full border border-slate-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore Watches
          </a>
        </div>
      </div>
    </section>
  );
}
