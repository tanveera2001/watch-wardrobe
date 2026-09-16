import { Link } from "react-router-dom";
import { Heart, Search, User } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-green-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-24">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Watch Wardrobe"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-lg text-slate-700 transition hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/watches"
            className="text-lg text-slate-700 transition hover:text-green-600"
          >
            Watches
          </Link>

          <Link
            to="/about"
            className="text-lg text-slate-700 transition hover:text-green-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-lg text-slate-700 transition hover:text-green-600"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link to="/watches" aria-label="Search watches">
            <Search
              size={24}
              className="text-green-800 transition hover:text-green-600"
            />
          </Link>

          <Link to="/wishlist" aria-label="Wishlist">
            <Heart
              size={24}
              className="text-green-800 transition hover:text-green-600"
            />
          </Link>

          <Link to="/login" aria-label="Login">
            <User
              size={24}
              className="text-green-800 transition hover:text-green-600"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
