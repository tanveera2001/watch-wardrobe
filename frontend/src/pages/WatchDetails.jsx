import { Link, useParams } from "react-router-dom";
import watches from "../data/watches.json";
import { WatchCard } from "../components/watches/WatchCard";

export const WatchDetails = () => {
  const { id } = useParams();

  const watch = watches.find((watch) => watch.id === Number(id));

  // Watch not found
  if (!watch) {
    return (
      <section className="bg-slate-50 px-24 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-serif text-4xl font-semibold text-slate-900">
            Watch Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The watch you are looking for does not exist.
          </p>

          <Link
            to="/watches"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Back to Watches
          </Link>
        </div>
      </section>
    );
  }

  // Related watches
  const relatedWatches = watches.filter(
    (item) => item.category === watch.category && item.id !== watch.id,
  );

  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Back Link */}
        <Link
          to="/watches"
          className="text-sm text-slate-500 transition hover:text-slate-900"
        >
          ← Back to Watches
        </Link>

        {/* Watch Details */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="aspect-square bg-slate-100">
              <img
                src={watch.image}
                alt={watch.model}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            {/* Brand */}
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              {watch.brand}
            </p>

            {/* Model */}
            <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-900">
              {watch.model}
            </h1>

            {/* Category */}
            <span className="mt-5 w-fit rounded-full bg-slate-200 px-4 py-2 text-sm text-slate-600">
              {watch.category}
            </span>

            {/* Price */}
            <p className="mt-6 text-3xl font-semibold text-slate-900">
              ৳{watch.price.toLocaleString("en-BD")}
            </p>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Description
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-500">
                {watch.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Specifications
              </h2>

              <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm text-slate-500">Brand</span>

                  <span className="text-sm font-medium text-slate-900">
                    {watch.brand}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm text-slate-500">Model</span>

                  <span className="text-sm font-medium text-slate-900">
                    {watch.model}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm text-slate-500">Category</span>

                  <span className="text-sm font-medium text-slate-900">
                    {watch.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Watches */}
        {relatedWatches.length > 0 && (
          <div className="mt-24">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                You May Also Like
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900">
                Related Watches
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedWatches.slice(0, 4).map((relatedWatch) => (
                <WatchCard key={relatedWatch.id} watch={relatedWatch} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
