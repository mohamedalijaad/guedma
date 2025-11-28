import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-primary/10 to-primary-light/30 text-gray-800'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground isDarkMode={isDarkMode} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          
          {/* 🔥 Nouveau titre en français */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary">Guedma.
</span> <br />
            <span>Cuisinez mieux, gaspillez moins.</span>
          </motion.h1>
          
          {/* 🔥 Nouveau texte en français */}
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guedma analyse les ingrédients que vous avez déjà chez vous et vous propose 
            des recettes tunisiennes adaptées, rapides et sans gaspillage. 
            Cuisinez intelligemment, chaque jour.
          </motion.p>
          
          {/* 🔥 Boutons mis à jour */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* CTA principal : Découvrir l’application */}
            <motion.div>
              <Link 
                to="/recettes"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors duration-300 inline-block"
                onClick={(e) => {
                  if (e.currentTarget) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                      if (e.currentTarget) {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }, 100);
                  }
                }}
              >
                Découvrir les recettes
              </Link>
            </motion.div>
            
            {/* Second bouton : Fonctionnement */}
            <motion.div>
              <Link 
                to="/features"
                className={`px-6 py-3 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                } rounded-lg font-medium transition-colors duration-300 border border-gray-300 inline-block`}
                onClick={(e) => {
                  if (e.currentTarget) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                      if (e.currentTarget) {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }, 100);
                  }
                }}
              >
                Comment ça marche
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* 🔥 Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Faites défiler</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
