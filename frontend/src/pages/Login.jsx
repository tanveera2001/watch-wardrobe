import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-4xl font-semibold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Sign in to your Watch Wardrobe account.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          {/* Email */}
          <div>
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
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
          </div>

          {/* Remember Me */}
          <div className="mt-5 flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300"
            />

            <label htmlFor="remember" className="text-sm text-slate-500">
              Remember me
            </label>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-slate-900 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
