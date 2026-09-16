import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Watches } from "../pages/Watches";
import { WatchDetails } from "../pages/WatchDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Collection from "../pages/Collection";
import Wishlist from "../pages/Wishlist";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/watches" element={<Watches />} />
      <Route path="/watches/:id" element={<WatchDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/collection" element={<Collection />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default AppRoutes;
