const marketplaceWatches = [
  {
    id: 1,
    name: "Seiko 5 Sports",
    seller: "Dhaka Watch Store",
    price: "$320",
    image: "/images/watches/5-sports-skx-series-srpd55k1.jpg",
  },
  {
    id: 2,
    name: "Citizen Brycen Chronograph",
    seller: "Timepiece BD",
    price: "$280",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 3,
    name: "G-Shock G-5600E",
    seller: "Watch House BD",
    price: "$120",
    image: "/images/watches/g-shock-g-5600e-1.jpg",
  },
];

export function MarketplacePreview() {
  return (
    <section className="bg-slate-100 px-24 py-28">
      {/* SECTION HEADER */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
          Watch Marketplace
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          Discover your next watch.
        </h2>

        <p className="mt-4 text-slate-600">
          Explore watches from trusted local sellers and discover pieces that
          deserve a place in your collection.
        </p>
      </div>

      {/* MARKETPLACE PREVIEW */}
      <div className="grid grid-cols-3 gap-6">
        {marketplaceWatches.map((watch) => (
          <div
            key={watch.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            {/* WATCH IMAGE */}
            <div className="flex h-72 items-center justify-center bg-slate-50 p-8">
              <img
                src={watch.image}
                alt={watch.name}
                className="h-full w-full object-contain"
              />
            </div>

            {/* WATCH INFORMATION */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {watch.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Sold by {watch.seller}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">
                  {watch.price}
                </span>

                <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
                  View Watch
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MARKETPLACE CTA */}
      <div className="mt-10 text-center">
        <button className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white">
          Explore Marketplace
        </button>
      </div>
    </section>
  );
}
