export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-24 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Watch Wardrobe
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Build your watch collection, showcase your style, and discover
              your next favorite watch.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="/" className="transition hover:text-slate-900">
                Home
              </a>

              <a href="/about" className="transition hover:text-slate-900">
                About
              </a>

              <a href="/contact" className="transition hover:text-slate-900">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Follow Us</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#" className="transition hover:text-slate-900">
                Facebook
              </a>

              <a href="#" className="transition hover:text-slate-900">
                Instagram
              </a>

              <a href="#" className="transition hover:text-slate-900">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Watch Wardrobe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
