import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import logo from "../assets/crop with pc app.png";

export function Navbar() {
  return (
    // NAVBAR CONTAINER
    <div className="flex items-center justify-between px-24 py-8 bg-green-100">
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

      {/* SEARCH BAR & CART ICON CONTAINER */}
      <div className="flex items-center gap-6">
        {/* SEARCH BAR */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search shirt, pant, wallet..."
            className="w-64 rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none focus:border-green-500"
          />
        </div>

        {/* CART ICON */}
        <Link to="/cart">
          <ShoppingCart
            size={24}
            className="text-green-800 hover:text-blue-600 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
