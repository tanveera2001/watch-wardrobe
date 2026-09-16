import watches from "../data/watches.json";

const Collection = () => {
  const collectionWatches = watches.slice(0, 5);

  const handleAddWatch = () => {
    alert("Add Watch functionality will be implemented later.");
  };

  const handleEdit = (watch) => {
    alert(`Edit functionality for ${watch.model} will be implemented later.`);
  };

  const handleDelete = (watch) => {
    alert(`Delete functionality for ${watch.model} will be implemented later.`);
  };

  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Your Collection
            </p>

            <h1 className="mt-2 font-serif text-4xl font-semibold text-slate-900">
              My Collection
            </h1>

            <p className="mt-3 max-w-xl text-slate-500">
              Keep track of the watches in your personal collection.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddWatch}
            className="w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Add Watch
          </button>
        </div>

        {/* Collection Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collectionWatches.map((watch) => (
            <article
              key={watch.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Watch Image */}
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={watch.image}
                  alt={watch.model}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Watch Information */}
              <div className="p-5">
                <p className="text-sm font-medium text-slate-500">
                  {watch.brand}
                </p>

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
                    onClick={() => handleEdit(watch)}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(watch)}
                    className="flex-1 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
