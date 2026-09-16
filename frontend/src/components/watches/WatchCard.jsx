import { Link } from "react-router-dom";

export const WatchCard = ({ watch }) => {
  return (
    <Link
      to={`/watches/${watch.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={watch.image}
          alt={watch.model}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm font-medium text-slate-500">{watch.brand}</p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {watch.model}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {watch.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-slate-900">
            ৳{watch.price.toLocaleString("en-BD")}
          </p>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
            {watch.category}
          </span>
        </div>
      </div>
    </Link>
  );
};
