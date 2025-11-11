import { Link } from "react-scroll";
import { NAVITEMS } from "../dataSheet";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Hom Narayan Amatya
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer specializing in React.js and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAVITEMS.map(({ title }) => (
                <li key={title}>
                  <Link
                    to={title}
                    spy
                    smooth
                    duration={1200}
                    offset={-80}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>bamatya1@gmail.com</li>
              <li>+977 9816776999</li>
              <li>Gaighat, Udayapur, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Hom Narayan Amatya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/bibekamatya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hom-narayan-amatya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
