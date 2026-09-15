export function HomeCTA() {
  return (
    <section className="px-24 py-28">
      <div className="overflow-hidden rounded-3xl bg-slate-900 px-12 py-20 text-center">
        {/* CTA CONTENT */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-400">
          Start Your Collection
        </p>

        <h2 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-white">
          Your watch collection deserves a wardrobe.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          Build your collection, showcase your watches, discover new pieces, and
          find your next favorite watch with Watch Wardrobe.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-900">
            Create Your Collection
          </button>

          <button className="rounded-full border border-slate-600 px-7 py-3 text-sm font-medium text-white">
            Explore Watches
          </button>
        </div>
      </div>
    </section>
  );
}
