import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaPinterest,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-zinc-900">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M30 28V12C30 10.8954 29.1046 10 28 10H27.8994C27.369 10 26.8604 10.2109 26.4854 10.5859L10.5859 26.4854C10.2109 26.8604 10 27.369 10 27.8994V40H0V27.8994C0 24.7168 1.26423 21.6645 3.51465 19.4141L19.4141 3.51465C21.6645 1.26423 24.7168 0 27.8994 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H14V30H28C29.1046 30 30 29.1046 30 28Z"
                    fill="#f97316"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-black tracking-widest text-white">
                    LUXE<span className="font-light">CHAIR</span>
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Premium Furniture
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-400 max-w-sm leading-relaxed">
                Elevating contemporary living environments through masterfully
                engineered comfort and architectural design.
              </p>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium tracking-wide text-zinc-400 uppercase">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                Free Shipping
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                30-Day Trial
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                5yr Warranty
              </span>
            </div>
          </div>

          {/* SHOP NAVIGATION */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <NavLink
                  to="/chairs"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  All Chairs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collections"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  New Arrivals
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COMPANY NAVIGATION */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  Contact Concierge
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="hover:text-orange-500 transition-colors block transform hover:translate-x-1 duration-300"
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* SOCIALS & MINI INSIGHTS */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
                Connect With Us
              </h4>

              <div className="flex items-center gap-2 mb-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <FaPinterest className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* INTEGRATED NEWSLETTER RECAP */}
            <div className="bg-zinc-900/50 border border-zinc-900 p-4 rounded-2xl">
              <p className="text-xs text-zinc-400 leading-normal">
                Need immediate design assistance? Reach our support portal
                directly at{" "}
                <a
                  href="mailto:support@luxechair.com"
                  className="text-white hover:text-orange-500 transition-colors underline"
                >
                  support@luxechair.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA & COMPLIANCE */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <div>
            © {new Date().getFullYear()} LUXECHAIR. All rights reserved.
          </div>

          {/* COMPLIANCE LINKS */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <NavLink
              to="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/accessibility"
              className="hover:text-zinc-300 transition-colors"
            >
              Accessibility
            </NavLink>
          </div>

          {/* PAYMENT SYSTEM BADGES */}
          <div className="flex items-center gap-2 text-xl text-zinc-600">
            <FaCcVisa
              aria-label="Visa Accepted"
              className="hover:text-zinc-400 transition-colors"
            />
            <FaCcMastercard
              aria-label="Mastercard Accepted"
              className="hover:text-zinc-400 transition-colors"
            />
            <FaCcApplePay
              aria-label="Apple Pay Accepted"
              className="hover:text-zinc-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
