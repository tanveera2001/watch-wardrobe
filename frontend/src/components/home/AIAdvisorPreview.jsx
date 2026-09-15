const recommendations = [
  {
    id: 1,
    name: "g-shock-g-5600e-1",
    reason:
      "A classic automatic style that could complement a dressier collection.",
    image: "/images/watches/g-shock-g-5600e-1.jpg",
  },
  {
    id: 2,
    name: "Citizen Brycen Chronograph",
    reason: "A sporty option that could add variety to an everyday collection.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
];

export function AIAdvisorPreview() {
  return (
    <section className="bg-white px-24 py-28">
      <div className="mb-12 max-w-2xl">
        <div className="mb-3 flex items-center gap-3">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            AI Watch Advisor
          </p>

          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500">
            Coming Soon
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          Find your next watch with a little help.
        </h2>

        <p className="mt-4 text-slate-600">
          Tell the AI what you like, what you already own, and what you are
          looking for. In the future, Watch Wardrobe will help you discover
          watches based on your collection and preferences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        {/* EXAMPLE CONVERSATION */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-slate-500">
                Example Conversation
              </p>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                Preview
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              What are you looking for?
            </h3>
          </div>

          {/* USER MESSAGE */}
          <div className="mb-4 flex justify-end">
            <div className="max-w-sm rounded-2xl rounded-br-md bg-slate-900 px-5 py-3 text-sm text-white">
              I want a watch for everyday use under $500.
            </div>
          </div>

          {/* AI MESSAGE */}
          <div className="rounded-2xl rounded-bl-md bg-slate-100 px-5 py-4">
            <p className="text-sm leading-6 text-slate-700">
              Based on your preferences, here are a few watch styles you might
              want to explore.
            </p>
          </div>

          <button
            disabled
            className="mt-8 cursor-not-allowed rounded-full bg-slate-200 px-6 py-3 text-sm font-medium text-slate-500"
          >
            AI Advisor — Coming Soon
          </button>
        </div>

        {/* EXAMPLE RECOMMENDATIONS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-slate-900">
                Example Recommendations
              </h3>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                Preview
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              An example of how future recommendations could look.
            </p>
          </div>

          <div className="space-y-4">
            {recommendations.map((watch) => (
              <div
                key={watch.id}
                className="flex gap-5 rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-medium text-slate-900">{watch.name}</h4>

                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {watch.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
