const recommendations = [
  {
    id: 1,
    name: "Seiko Presage Cocktail Time",
    reason: "Matches your preference for classic automatic watches.",
    image: "/images/watches/5-sports-skx-series-srpd55k1.jpg",
  },
  {
    id: 2,
    name: "Citizen Brycen Chronograph",
    reason: "A sporty option that complements your current collection.",
    image: "/images/watches/brycen-chronograph-ca0649-06x.jpg",
  },
];

export function AIAdvisorPreview() {
  return (
    <section className="bg-white px-24 py-28">
      {/* SECTION HEADER */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
          AI Watch Advisor
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          Find your next watch with a little help.
        </h2>

        <p className="mt-4 text-slate-600">
          Tell the AI what you like, what you already own, and what you are
          looking for. Get personalized watch suggestions based on your
          collection and preferences.
        </p>
      </div>

      {/* AI ADVISOR PREVIEW */}
      <div className="grid grid-cols-2 gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        {/* AI CHAT */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-500">Watch Advisor</p>

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
              Based on your collection and preferences, I found a few options
              that might fit your style.
            </p>
          </div>

          <button className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">
            Ask AI Advisor
          </button>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Suggested for you
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Personalized recommendations
            </p>
          </div>

          <div className="space-y-4">
            {recommendations.map((watch) => (
              <div
                key={watch.id}
                className="flex gap-5 rounded-2xl border border-slate-200 p-4"
              >
                {/* WATCH IMAGE */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* WATCH INFO */}
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
