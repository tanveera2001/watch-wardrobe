import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-4xl font-semibold text-slate-900">
            Create an Account
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Start building your personal watch collection.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-slate-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
          </div>

          {/* Register */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-slate-900 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
