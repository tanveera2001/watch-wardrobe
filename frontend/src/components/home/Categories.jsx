const categories = [
  {
    id: 1,
    name: "Dress Watches",
    description: "Elegant watches for formal occasions.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 2,
    name: "Dive Watches",
    description: "Built for adventure and underwater exploration.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 3,
    name: "Chronograph",
    description: "Precision timekeeping with stopwatch functionality.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
  {
    id: 4,
    name: "Field Watches",
    description: "Practical and durable watches for everyday use.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
];

export const Categories = () => {
  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Explore
          </p>

          <h2 className="mt-2 font-serif text-4xl font-semibold text-slate-900">
            Categories
          </h2>

          <p className="mt-3 max-w-xl text-slate-500">
            Explore watches by style and find the one that fits your collection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-4/5 overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
