

import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="px-4 md:px-12 py-10 border-t border-green-400 rounded-t-xl
      bg-green-100 text-green-900 
      dark:bg-gray-900 dark:text-green-100 transition-colors duration-300"
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
            Your personal assistant for healthier, happier plants.  
            Track watering, fertilizing, and plant health with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-200">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-green-600 dark:hover:text-green-400">Home</Link></li>
            <li><Link to="/all-plants" className="hover:text-green-600 dark:hover:text-green-400">All Plants</Link></li>
            <li><Link to="/myProfile" className="hover:text-green-600 dark:hover:text-green-400">My Profile</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-200">Contact</h3>
          <p className="text-sm">Email: support@plantcare.app</p>
          <p className="text-sm mb-3">Phone: +880 123-456-789</p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-green-700 dark:text-green-400">
        &copy; {new Date().getFullYear()} PlantCare Tracker — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;










