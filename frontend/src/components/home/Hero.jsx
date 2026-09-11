import HeroImage from "../../assets/pin_704109723038056297.jpg";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/96 via-black/60 to-black/12"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-24">
        <div className="max-w-2xl text-white">
          {/* EYEBROW */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
            Your Digital Watch Wardrobe
          </p>
          {/* HEADING */}
          <h1 className="font-serif text-6xl font-semibold leading-[1.05]">
            Your Watches.
            <br />
            Your Collection.
            <br />
            Your Wardrobe.
          </h1>
          {/* DESCRIPTION */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
            Build your personal watch collection, showcase it beautifully, and
            discover your next perfect watch.
          </p>
          {/* CTA BUTTIONS */}
          <div className="mt-9 flex items-center gap-4">
            <a
              href="/watches"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-white/90"
            >
              Explore Watches
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
