import { useMemo, useState } from "react";
import { WatchCard } from "./WatchCard";
import watches from "../../data/watches.json";

const WatchCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const brands = [...new Set(watches.map((watch) => watch.brand))];

  const categories = [...new Set(watches.map((watch) => watch.category))];

  const filteredWatches = useMemo(() => {
    const result = watches.filter((watch) => {
      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        watch.brand.toLowerCase().includes(searchText) ||
        watch.model.toLowerCase().includes(searchText);

      const matchesBrand =
        selectedBrand === "All" || watch.brand === selectedBrand;

      const matchesCategory =
        selectedCategory === "All" || watch.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });

    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "name") {
      result.sort((a, b) => a.model.localeCompare(b.model));
    }

    return result;
  }, [searchTerm, selectedBrand, selectedCategory, sortOption]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSortOption("default");
  };

  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Explore Our Collection
          </p>

          <h1 className="mt-2 font-serif text-4xl font-semibold text-slate-900">
            Watch Catalog
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Discover watches by brand, style, and price.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search watches by brand or model..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <select
            value={selectedBrand}
            onChange={(event) => setSelectedBrand(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          >
            <option value="All">All Brands</option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          >
            <option value="All">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>

          <button
            type="button"
            onClick={resetFilters}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
          >
            Reset
          </button>
        </div>

        {/* Result Count */}
        <p className="mb-6 text-sm text-slate-500">
          Showing {filteredWatches.length} of {watches.length} watches
        </p>

        {/* Watch Grid */}
        {filteredWatches.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <h2 className="text-xl font-semibold text-slate-900">
              No watches found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WatchCatalog;
