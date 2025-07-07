import { motion } from "framer-motion";
import { Instagram, Mail, Menu, Play, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.nav className="sticky top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <motion.button
              className="text-red-500 hover:text-red-400 font-semibold flex items-center group relative text-sm xl:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://youtu.be/I-sTFaSwoX0?si=RDnciIQT6RXDG4zG",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <FaMusic className="w-3 h-3 xl:w-4 xl:h-4 mr-2 group-hover:fill-current transition-all duration-300" />
              New Release
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="text-white hover:text-gray-300 font-semibold flex items-center group relative text-sm xl:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=5Eqb_-j3FDA",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Play className="w-3 h-3 xl:w-4 xl:h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
              Top hit
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Add this new "Contact Now" button */}
            <motion.a
              href="mailto:Shahrukhfepo@gmail.com"
              className="text-white hover:text-gray-300 font-semibold flex items-center group relative text-sm xl:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-3 h-3 xl:w-4 xl:h-4 mr-2 group-hover:text-yellow-400 transition-colors duration-300" />
              Contact Now
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>

          {/* Logo - Centered */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2"
            // whileHover={{ scale: 1.1 }}
            animate={{
              textShadow: [
                "0 0 5px #ef4444",
                "0 0 10px #ef4444",
                "0 0 15px #ef4444",
                "0 0 10px #ef4444",
                "0 0 5px #ef4444",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="text-red-500 font-bold text-lg sm:text-xl cursor-pointer text-center">
              FEPO
              <div className="text-xs text-white">Shahrukh Kazim</div>
            </div>
          </motion.div>

          {/* Social Icons - Desktop */}
          <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
            <motion.a
              href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-pink-400 cursor-pointer transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://open.spotify.com/artist/02yAoSmsqYASF4Wb45bRlJ?si=FUpZE2KuTTORctKhIxoStg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
            </motion.a>
            <motion.a
              href="https://youtube.com/@shahrukhkazimmusic?si=F-7AdhOpat7R0szv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-red-500/20"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 py-4 space-y-4">
            <motion.button
              className="text-red-500 hover:text-red-400 font-semibold flex items-center group w-full"
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://youtu.be/I-sTFaSwoX0?si=RDnciIQT6RXDG4zG",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <FaMusic className="w-4 h-4 mr-2 group-hover:fill-current transition-all duration-300" />
              New Release
            </motion.button>
            <motion.button
              className="text-white hover:text-gray-300 font-semibold flex items-center group w-full"
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=5Eqb_-j3FDA",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Play className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
              Top hit
            </motion.button>
            <motion.a
              href="mailto:Shahrukhfepo@gmail.com"
              className="text-white hover:text-gray-300 font-semibold flex items-center group w-full"
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:text-yellow-400 transition-colors duration-300" />
              Contact Now
            </motion.a>

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <a
                href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-white hover:text-pink-400 cursor-pointer transition-colors duration-300" />
              </a>
              <a
                href="https://open.spotify.com/artist/02yAoSmsqYASF4Wb45bRlJ?si=FUpZE2KuTTORctKhIxoStg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-5 h-5 text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com/@shahrukhkazimmusic?si=F-7AdhOpat7R0szv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 text-white hover:text-red-500 cursor-pointer transition-colors duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
