
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="px-4 md:px-12 py-10 
       text-green-900 bg-green-50 dark:bg-zinc-900
       dark:text-green-100 transition-colors duration-300
      min-h-[180px]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-300 mb-4"
          >
            <FaLeaf className="text-green-600 dark:text-green-400" />
            PlantCare
          </Link>
          <p className="text-sm text-green-800 dark:text-green-200">
            Empowering plant lovers to nurture healthier greenery. Manage your
            plant care routines with intelligent tracking and timely reminders.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-200">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-plants"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                All Plants
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-200">
            Contact
          </h3>
          <p className="text-sm">Email: help@plantcare.com</p>
          <p className="text-sm mb-3">Phone: +880 1700-123456</p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com/plantcarebd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/plantcarebd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/plantcarebd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
     <div className="border-t mt-10 pt-4 text-center text-sm text-green-700 dark:text-green-400">
  &copy; {new Date().getFullYear()} PlantCare — All rights reserved. <br />
  Developed by{" "}
  <a
    href="https://m-hasan.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium hover:underline hover:text-green-800 dark:hover:text-green-300"
  >
    Mehedi Hasan
  </a>
</div>

    </footer>
  );
};

export default Footer;
