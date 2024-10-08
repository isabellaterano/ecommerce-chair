import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useContext(ShopContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <header className="navbar bg-base-100 shadow-lg z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/chairs" className="hover:text-primary">
                Chairs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-primary">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-2xl font-extrabold uppercase">
          Chair <span className="text-primary">.</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <NavLink to="/" className="hover:text-primary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chairs" className="hover:text-primary">
              Chairs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-primary">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-primary">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {productsCount}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{productsCount} Items</span>
                <span className="text-info">
                  Subtotal: ${cart.getTotalCost().toFixed(2)}
                </span>
                <div className="card-actions">
                  <button
                    onClick={() => navigate("/cart")}
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
