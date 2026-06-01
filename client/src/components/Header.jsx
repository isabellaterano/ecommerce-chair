import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineMagnifyingGlass,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

const Header = () => {
  const cart = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileOpen]);

  const productsCount =
    cart?.items?.reduce((sum, product) => sum + product.quantity, 0) || 0;

  const navLinkStyle = ({ isActive }) =>
    `relative text-sm font-medium transition-all py-2 hover:text-orange-500 ${
      isActive ? "text-orange-500" : "text-gray-700"
    } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full ${
      isActive ? "after:w-full" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      {/* TOP BAR */}
      <div className="bg-zinc-900 text-zinc-200 text-xs font-medium py-2 text-center tracking-wide">
        <span className="opacity-80">Free Shipping Over</span>{" "}
        <span className="text-white font-bold">$100</span> ·
        <span className="opacity-80 ml-1">30‑Day Returns</span>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          {/* LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group hover:opacity-90 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 40 40"
              fill="none"
              className="drop-shadow-sm"
            >
              <path
                d="M30 28V12C30 10.8954 29.1046 10 28 10H27.8994C27.369 10 26.8604 10.2109 26.4854 10.5859L10.5859 26.4854C10.2109 26.8604 10 27.369 10 27.8994V40H0V27.8994C0 24.7168 1.26423 21.6645 3.51465 19.4141L19.4141 3.51465C21.6645 1.26423 24.7168 0 27.8994 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H14V30H28C29.1046 30 30 29.1046 30 28Z"
                fill="#f97316"
              />
            </svg>

            <div className="hidden sm:block">
              <h1 className="text-xl font-black tracking-widest text-gray-900">
                LUXE<span className="font-light">CHAIR</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium -mt-1">
                Premium Furniture
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/chairs" className={navLinkStyle}>
              Shop
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-all"
            >
              <HiOutlineMagnifyingGlass className="text-2xl" />
            </button>

            {/* CART */}
            <button
              onClick={() => navigate("/cart")}
              className="relative flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-all"
            >
              <HiOutlineShoppingBag className="text-2xl" />

              {productsCount > 0 && (
                <span className="absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md translate-x-1 -translate-y-1">
                  {productsCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => navigate("/chairs")}
              className="hidden lg:inline-flex bg-zinc-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-orange-500 transition-all shadow-md hover:shadow-orange-500/30"
            >
              Shop Now
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 transition-all"
            >
              {mobileOpen ? (
                <HiXMark className="text-2xl" />
              ) : (
                <HiBars3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BAR EXPANDIDA */}
      {searchOpen && (
        <div className="w-full bg-white border-t border-gray-200 shadow-inner px-6 py-4 animate-fadeIn">
          <input
            type="text"
            placeholder="Search for chairs, categories, materials..."
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
        </div>
      )}

      {/* MOBILE NAV */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top border-t border-gray-100 ${
          mobileOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 h-[calc(100vh-80px)] overflow-y-auto pb-24">
          <NavLink to="/" className="text-xl font-medium">
            Home
          </NavLink>
          <NavLink to="/chairs" className="text-xl font-medium">
            Shop
          </NavLink>
          <NavLink to="/about" className="text-xl font-medium">
            About
          </NavLink>
          <NavLink to="/contact" className="text-xl font-medium">
            Contact
          </NavLink>

          <hr className="border-gray-200" />

          <button
            onClick={() => navigate("/chairs")}
            className="bg-orange-500 text-white text-lg font-semibold py-4 rounded-xl shadow-lg shadow-orange-500/30"
          >
            Shop Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
