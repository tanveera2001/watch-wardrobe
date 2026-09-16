import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default AppLayout;
