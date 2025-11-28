import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame, Utensils } from 'lucide-react';

interface LoadingScreenProps {
  isDarkMode: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isDarkMode }) => {
  const [currentWord, setCurrentWord] = useState(0);

  // Words that show in rotation
  const words = ['Guedma.', 'Cuisine.', 'Sans Gaspi.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Random culinary icons
  const icons = [Leaf, Flame, Utensils];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Background with Guedma colors */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? 'bg-gradient-to-br from-[#5A0E0E] via-[#7A1F1F] to-[#3D0A0A]'
            : 'bg-gradient-to-br from-[#F3E7D6] via-[#EAC8A6] to-[#D79F78]'
        }`}
      />

      {/* Floating culinary particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <motion.div
              key={i}
              className="absolute text-white/30"
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 6 + 5,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 4,
              }}
            >
              <Icon size={Math.random() * 28 + 20} />
            </motion.div>
          );
        })}
      </div>

      {/* Typography + loading bar */}
      <div className="relative text-center">
        <div className="h-48 flex justify-center items-center mb-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-extrabold text-white"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Loading bar */}
        <motion.div
          className="mt-4 w-64 h-2 bg-white/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
