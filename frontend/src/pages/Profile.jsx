const Profile = () => {
  const profile = {
    name: "Tanveer Ahmed",
    image: "/images/profile/profile.jpg",
    bio: "Watch enthusiast building a personal collection and exploring different watch styles.",
    wristSize: "6.5 inches",
    budget: "৳30,000 - ৳100,000",
    favoriteBrands: ["Seiko", "Citizen", "Tissot", "Casio"],
    preferences: [
      "Automatic watches",
      "Dress watches",
      "Everyday watches",
      "Minimal designs",
    ],
  };

  return (
    <section className="bg-slate-50 px-24 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Profile Header */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            {/* Profile Image */}
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-slate-100">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center sm:text-left">
              <h1 className="font-serif text-4xl font-semibold text-slate-900">
                {profile.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Wrist Size */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Wrist Size</p>

            <p className="mt-2 text-lg font-semibold text-slate-900">
              {profile.wristSize}
            </p>
          </div>

          {/* Budget */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Budget</p>

            <p className="mt-2 text-lg font-semibold text-slate-900">
              {profile.budget}
            </p>
          </div>
        </div>

        {/* Favorite Brands */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Favorite Brands
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {profile.favoriteBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Watch Preferences */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Watch Preferences
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {profile.preferences.map((preference) => (
              <span
                key={preference}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600"
              >
                {preference}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
