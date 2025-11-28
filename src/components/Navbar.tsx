// ✅ FINAL CLEAN GUEDMA NAVBAR (FULL RED THEME APPLIED)

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, LogIn, BookOpen, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import AuthModal from './Auth/AuthModal';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Fonctionnalités', href: '/fonctionnalites' },
    { name: 'Recettes', href: '/recettes' },
    { name: 'Ressources', href: '/resources', icon: BookOpen },
    { name: 'Contact', href: '/contact' },
    ...(user ? [{ name: 'Tableau de bord', href: '/admin', icon: LayoutDashboard }] : [])
  ];

  const handleAuthClick = () => {
    if (user) signOut();
    else setIsAuthModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="relative rounded-full overflow-hidden">

            {/* RED GRADIENT BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-xl"></div>
            <div className="absolute inset-0 rounded-full border border-primary/30"></div>

            <div className={`relative px-6 py-3 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-lg`}>
              <div className="flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Guedma" className="h-12" />
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`navbar-link relative px-4 py-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      } ${location.pathname === link.href ? 'navbar-link-active' : ''}`}
                    >
                      {link.name}

                      {location.pathname === link.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-light to-primary rounded-full"
                          layoutId="navbar-underline"
                          style={{ width: '100%' }}
                        />
                      )}
                    </Link>
                  ))}

                  {/* LOGIN / LOGOUT */}
                  <button
                    onClick={handleAuthClick}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'bg-primary-light hover:bg-primary'
                        : 'bg-primary hover:bg-primary-light'
                    } text-white`}
                  >
                    <LogIn size={18} />
                    <span>{user ? 'Se déconnecter' : 'Se connecter'}</span>
                  </button>

                  {/* THEME TOGGLE */}
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition-colors ${
                      isDarkMode
                        ? 'bg-gray-800 text-primary-light hover:bg-gray-700'
                        : 'bg-gray-100 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                {/* MOBILE BUTTONS */}
                <div className="md:hidden flex items-center space-x-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition-colors ${
                      isDarkMode
                        ? 'bg-gray-800 text-primary-light hover:bg-gray-700'
                        : 'bg-gray-100 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>

                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 rounded-full transition-colors ${
                      isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-lg border border-primary/20 ${
                  isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
                } backdrop-blur-lg`}
              >
                <div className="p-4 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                        location.pathname === link.href
                          ? isDarkMode
                            ? 'bg-primary/30 text-primary-light'
                            : 'bg-primary/10 text-primary'
                          : isDarkMode
                          ? 'text-white hover:bg-gray-800'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <button
                    onClick={handleAuthClick}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'bg-primary-light hover:bg-primary'
                        : 'bg-primary hover:bg-primary-light'
                    } text-white`}
                  >
                    <LogIn size={18} />
                    <span>{user ? 'Se déconnecter' : 'Se connecter'}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Navbar;
