const WishlistCard = ({ watch, onRemove }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Watch Image */}
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={watch.image}
          alt={watch.model}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Watch Information */}
      <div className="p-5">
        <p className="text-sm font-medium text-slate-500">{watch.brand}</p>

        <h2 className="mt-2 text-lg font-semibold text-slate-900">
          {watch.model}
        </h2>

        <p className="mt-2 text-sm text-slate-500">{watch.category}</p>

        <p className="mt-3 text-lg font-semibold text-slate-900">
          ৳{watch.price.toLocaleString("en-BD")}
        </p>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() =>
              alert(
                "Add to collection functionality will be implemented later.",
              )
            }
            className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Add
          </button>

          <button
            type="button"
            onClick={() => onRemove(watch)}
            className="flex-1 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default WishlistCard;
