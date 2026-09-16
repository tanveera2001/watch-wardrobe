import { useState } from "react";
import watches from "../data/watches.json";
import WishlistCard from "../components/wishlist/WishlistCard";

const Wishlist = () => {
  // Static wishlist data for Level 0
  const [wishlistWatches, setWishlistWatches] = useState(watches.slice(0, 3));

  const handleRemove = (watch) => {
    setWishlistWatches((currentWatches) =>
      currentWatches.filter((item) => item.id !== watch.id),
    );
  };

  const handleAddWatch = () => {
    alert("Add to wishlist functionality will be implemented later.");
  };

  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Saved Watches
            </p>

            <h1 className="mt-2 font-serif text-4xl font-semibold text-slate-900">
              My Wishlist
            </h1>

            <p className="mt-3 max-w-xl text-slate-500">
              Save watches you love and keep them in one place.
            </p>
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleAddWatch}
            className="w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Add Watch
          </button>
        </div>

        {/* Wishlist */}
        {wishlistWatches.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlistWatches.map((watch) => (
              <WishlistCard
                key={watch.id}
                watch={watch}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              You haven't added any watches to your wishlist yet. Explore the
              watch catalog and save the ones you love.
            </p>

            <button
              type="button"
              onClick={handleAddWatch}
              className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Add Watch
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
