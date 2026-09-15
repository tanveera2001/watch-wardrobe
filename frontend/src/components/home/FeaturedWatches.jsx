const featuredWatches = [
  {
    id: 1,
    name: "Seiko 5 Sports SKX Series",
    image: "/images/watches/5-sports-skx-series-srpd55k1.jpg",
  },
  {
    id: 2,
    name: "Citizen Brycen Chronograph",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 3,
    name: "G-Shock G-5600E",
    image: "/images/watches/g-shock-g-5600e-1.jpg",
  },
  {
    id: 4,
    name: "Citizen Garrison",
    image: "/images/watches/garrison-bm8180-03e.jpg",
  },
  {
    id: 5,
    name: "Seiko Prospex Sea",
    image: "/images/watches/prospex-sea-sne573p1.jpg",
  },
];

export function FeaturedWatches() {
  return (
    <section className="bg-amber-300 px-24 py-28">
      {/* SECTION HEADER */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
          Featured Collection
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          Discover remarkable watches.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Explore some of the watches that could become part of your collection.
        </p>
      </div>

      {/* FEATURED WATCHES */}
      <div className="flex gap-6">
        {/* FEATURED WATCH CARD */}
        {featuredWatches.map((watch) => (
          <div
            key={watch.id}
            className="w-60 shrink-0 overflow-hidden rounded-2xl border border-slate-900 bg-white"
          >
            {/* WATCH IMAGE */}
            <div className="flex items-center justify-center h-64 bg-red-100 p-6">
              <img
                src={watch.image}
                alt={watch.name}
                className="h-full w-full object-contain"
              />
            </div>
            {/* WATCH INFO */}
            <div className="p-5">
              <h3 className="text-lg font-medium text-slate-900">
                {watch.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
