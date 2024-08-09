import Logo from "../../assets/silkcoat_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="text-red-500 text-2xl font-bold mb-4">
              <a href="/">
                {" "}
                <img src={Logo} alt="logo" />{" "}
              </a>
            </div>
            <div className="flex items-center justify md:justify-start mb-4">
              <FaMapMarkerAlt className="mr-2" />
              <p>
                Plot No. 807 Cadastrial Zone C16, Gidado Idris Way, Idu
                Industrial Area, FCT-Abuja Nigeria.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <FaPhoneAlt className="mr-2" />
              <p>Phone: +234-803-505-3133</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                className="text-white hover:text-red-500 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                className="text-white hover:text-red-500 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-red-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-red-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-red-500 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-red-500 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https//www.silkcoat.com _blank"
                  className="hover:text-red-500 transition duration-300"
                >
                  Silkcoat Turkey
                </a>
              </li>
              <li>
                <a
                  href="www.platinumng.com"
                  className="hover:text-red-500 transition duration-300"
                >
                  Platinum Paint
                </a>
              </li>
              <li>
                <a
                  href="/www.drsmart.com.ng"
                  className="hover:text-red-500 transition duration-300"
                >
                  Dr Smart Paint
                </a>
              </li>
              <li>
                <a
                  href="www.iconapaints.com"
                  className="hover:text-red-500 transition duration-300"
                >
                  ICONA Paint
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center">
          © {currentYear} SILKCOAT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
