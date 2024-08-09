import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/silkcoat_logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Placeholder for active page tracking, replace with actual logic or routing
  const activePage = "Home";

  return (
    <nav
      className={`fixed w-full h-20 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-black/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src={Logo} alt="PaintCompany Logo" className="w-32 mr-2" />
        </div>

        {/* Responsive menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white hover:text-red-500 text-center focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Additional Info */}
        <div
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block mt-4" : "hidden"
          }`}
        >
          <div className="flex items-center space-x-2 gap-4">
            <a
              href="https://web.facebook.com/officialsilkcoatng"
              target="_blank"
              className="text-white hover:text-red-500 shadow-md transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/officialsilkcoatng/"
              target="_blank"
              className="text-white hover:text-red-500 shadow-md transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
          <p
            className="text-sm text-white image-shadow font-titleFonts
          "
          >
            📞 (+234) 803-505-3133
          </p>
          <p className="text-sm text-white font-titleFonts">
            🕒 Mon-Fri: 8 AM - 5:30 PM{" "}
            <span className=" text-sm text-white">| Sat: 12 PM</span>
          </p>
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex items-center font-handwriting font-bold space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`block py-2 md:py-0 ${
                activePage === "Home" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block py-2 md:py-0 ${
                activePage === "About" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`block py-2 md:py-0 ${
                activePage === "Products" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`block py-2 md:py-0 ${
                activePage === "Products" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block py-2 md:py-0 ${
                activePage === "Contact" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
