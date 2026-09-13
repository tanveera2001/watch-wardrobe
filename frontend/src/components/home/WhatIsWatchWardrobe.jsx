import HeroImage from "../../assets/pin_704109723038056297.jpg";

export function WhatIsWatchWardrobe() {
  return (
    <section className="bg-slate-50 px-24 py-28">
      {/* SECTION CONTAINER */}
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          {/* EYEBROW */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            What is Watch Wardrobe?
          </p>

          {/* HEADING */}
          <h2 className="font-serif text-5xl font-semibold leading-tight text-slate-900">
            More than a watch collection.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Watch Wardrobe is your personal digital space for collecting,
            organizing, and showcasing the watches you own — while helping you
            discover what belongs in your collection next.
          </p>
        </div>

        {/* VISUAL AND PILLARS */}
        <div className="mt-20 grid grid-cols-2 items-center gap-16">
          {/* WATCH VISUAL */}
          <div className="relative h-115 overflow-hidden rounded-3xl">
            <img
              src={HeroImage}
              alt="A premium watch"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* THREE PILLARS */}
          <div className="space-y-10">
            {/* COLLECT */}
            <div>
              <p className="mb-2 text-sm font-medium tracking-[0.2em] text-slate-400">
                01
              </p>

              <h3 className="font-serif text-3xl font-semibold text-slate-900">
                Collect
              </h3>

              <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
                Build a personal collection around the watches you own and love.
              </p>
            </div>

            {/* ORGANIZE */}
            <div>
              <p className="mb-2 text-sm font-medium tracking-[0.2em] text-slate-400">
                02
              </p>

              <h3 className="font-serif text-3xl font-semibold text-slate-900">
                Organize
              </h3>

              <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
                Keep your watches together in one organized digital wardrobe.
              </p>
            </div>

            {/* DISCOVER */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                03
              </p>

              <h3 className="font-serif text-3xl font-semibold text-slate-900">
                Discover
              </h3>

              <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
                Explore what could become the next addition to your collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
