const showroomWatches = [
  {
    id: 1,
    name: "Seiko 5 Sports",
    image: "/images/watches/5-sports-skx-series-srpd55k1.jpg",
  },
  {
    id: 2,
    name: "Citizen Brycen",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 3,
    name: "G-Shock G-5600E",
    image: "/images/watches/g-shock-g-5600e-1.jpg",
  },
];

export function ShowroomPreview() {
  return (
    <section className="bg-slate-900 px-24 py-28">
      {/* SECTION HEADER */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
          3D Showroom
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Turn your collection into a showroom.
        </h2>

        <p className="mt-4 text-slate-300">
          Create a visual space for your watches and showcase your collection in
          a whole new way.
        </p>
      </div>

      {/* SHOWROOM PREVIEW */}
      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">
        {/* SHOWROOM TOP BAR */}
        <div className="flex items-center justify-between border-b border-slate-700 px-8 py-5">
          <div>
            <h3 className="text-lg font-semibold text-white">
              My Watch Showroom
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Personal collection showcase
            </p>
          </div>

          <button className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-200">
            Enter Showroom
          </button>
        </div>

        {/* SHOWROOM */}
        <div className="relative min-h-105 overflow-hidden px-12 py-16">
          {/* FLOOR */}
          <div className="absolute bottom-0 left-0 h-24 w-full bg-slate-950" />

          {/* WATCH DISPLAY */}
          <div className="relative z-10 flex items-end justify-center gap-10">
            {showroomWatches.map((watch) => (
              <div key={watch.id} className="flex w-56 flex-col items-center">
                {/* WATCH */}
                <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-slate-700 bg-slate-700/50 p-8">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* WATCH NAME */}
                <h4 className="mt-4 text-center font-medium text-white">
                  {watch.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
