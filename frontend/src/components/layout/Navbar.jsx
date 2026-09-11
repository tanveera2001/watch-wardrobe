import { Link } from "react-router-dom";
import { Heart, Search, User } from "lucide-react";
import logo from "../../assets/logo.png";

export function Navbar() {
  return (
    // NAVBAR CONTAINER
    <nav className="sticky top-0 z-50 flex items-center justify-between px-24 h-20 bg-green-100">
      {/* LOGO CONTAINER  */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="website-logo"
            className="w-auto h-10 object-contain"
          />
        </Link>
      </div>

      {/* NAVLINKS CONTAINER  */}
      <div className="flex gap-10">
        <Link to="/" className="text-lg hover:text-green-600">
          Home
        </Link>

        <Link to="/about" className="text-lg hover:text-green-600">
          About
        </Link>

        <Link to="/contact" className="text-lg hover:text-green-600">
          Contact
        </Link>
      </div>

      {/* ICON CONTAINER */}
      <div className="flex items-center gap-6">
        {/* SEARCH ICON */}
        <Link to="/watches">
          <Search size={24} className="text-green-800 hover:text-blue-600" />
        </Link>

        {/* WISHLIST ICON */}
        <Link to="/wishlist">
          <Heart size={24} className="text-green-800 hover:text-blue-600" />
        </Link>

        {/* USER ICON */}
        <Link to="/profile">
          <User size={24} className="text-green-800 hover:text-blue-600" />
        </Link>
      </div>
    </nav>
  );
}
