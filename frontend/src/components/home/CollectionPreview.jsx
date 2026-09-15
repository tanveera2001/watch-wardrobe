const collectionWatches = [
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

export function CollectionPreview() {
  return (
    <section className="bg-slate-100 px-24 py-28">
      {/* SECTION HEADER */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
          Your Collection
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          Your watches, your collection.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Keep your watches organized, build your personal collection, and
          showcase the pieces you love.
        </p>
      </div>

      {/* COLLECTION PREVIEW */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        {/* COLLECTION TOP BAR */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              My Watch Collection
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              3 watches in your collection
            </p>
          </div>

          <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700">
            View Collection
          </button>
        </div>

        {/* WATCHES */}
        <div className="flex gap-6">
          {collectionWatches.map((watch) => (
            <div
              key={watch.id}
              className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              {/* WATCH IMAGE */}
              <div className="flex h-64 items-center justify-center p-6">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* WATCH INFO */}
              <div className="border-t border-slate-200 bg-white p-5">
                <h4 className="font-medium text-slate-900">{watch.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
