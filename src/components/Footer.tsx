import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Leaf, ArrowRight, Globe, Clock, Mail, Phone } from 'lucide-react';

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Fonctionnalités', href: '/features' },
    { name: 'Recettes', href: '/recettes' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>

      {/* Decorative Leaf Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900' : 'bg-gradient-to-b from-gray-100 via-gray-100/95 to-gray-100'}`} />
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isDarkMode ? 'text-emerald-400/20' : 'text-primary/20'}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <Leaf size={Math.random() * 30 + 20} />
          </motion.div>
        ))}
      </div>

      {/* 🌍 Section "Visit Us" — OPTIONAL (kept but renamed) */}
      <div className={`relative border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Où nous trouver</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Siège de Guedma — Tunisie
            </p>
          </div>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.6912034143246!2d10.18077!3d36.83435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b7e5e4cc6f%3A0x9c38c98399a9f7f9!2sAvenue%20Louis%20Braille%2C%20Cite%20El%20Khadra%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1700000000001"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* 🥗 GUEDMA BRANDING */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <img src="/logo.png" alt="Guedma" className="h-10" />
              </Link>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Guedma vous aide à cuisiner intelligemment, réduire le gaspillage et 
                redécouvrir les recettes authentiques de la cuisine tunisienne.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={`p-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800 hover:bg-primary' : 'bg-white hover:bg-primary'
                      } transition-all duration-300 hover:text-white`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center ${
                        isDarkMode ? 'hover:text-emerald-400' : 'hover:text-primary-light'
                      } transition-colors`}
                    >
                      <AnimatePresence>
                        {hoveredLink === link.name && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ width: 0 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          />
                        )}
                      </AnimatePresence>
                      <ArrowRight size={16} className="mr-2" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Globe className="text-primary mt-1" size={20} />
                  <span>cité olympique,
rue luis braille 1003,
Tunis, Tunisia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <span>+216 24921002</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span>Guedma2025@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="text-primary" size={20} />
                  <span>Lun - Ven : 9h → 18h</span>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Légal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-primary">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-primary">Conditions d’utilisation</a></li>
                <li><a href="#" className="hover:text-primary">Cookies</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={`relative border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Guedma — Tous droits réservés.
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Fait avec ❤️ en Tunisie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
