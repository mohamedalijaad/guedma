import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="about" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="container mx-auto px-4">
        
        {/* 🔥 À propos de Guedma */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center" 
            variants={itemVariants}
          >
            À propos de <span className="text-primary">Guedma</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-8" 
            variants={itemVariants}
          ></motion.div>
          
          {/* Mission */}
          <motion.p 
            className="text-xl md:text-2xl font-semibold mb-6 text-center" 
            variants={itemVariants}
          >
            Guedma simplifie la cuisine tunisienne en vous proposant des recettes 
            basées sur les ingrédients que vous avez déjà chez vous.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg mb-8 text-center" 
            variants={itemVariants}
          >
            Notre objectif est d’aider chacun à cuisiner <span className="font-semibold">plus facilement</span>, 
            <span className="font-semibold"> avec moins de gaspillage</span>, 
            tout en valorisant <span className="font-semibold">le patrimoine culinaire tunisien</span>.
          </motion.p>
          
          {/* Notre histoire */}
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 text-center" 
            variants={itemVariants}
          >
            Notre histoire
          </motion.h3>
          
          <motion.p 
            className="text-base md:text-lg mb-8 text-center" 
            variants={itemVariants}
          >
            Guedma est née d’une idée simple : beaucoup de familles jettent des ingrédients 
            faute de savoir quoi cuisiner avec.  
            Nous avons donc créé une application capable de transformer vos restes et vos produits du quotidien 
            en <span className="text-primary font-semibold">recettes tunisiennes savoureuses</span>.  
            Aujourd’hui, Guedma aide les utilisateurs à cuisiner de façon plus intelligente, plus responsable 
            et plus inspirée.
          </motion.p>
        </motion.div>

        {/* ❌ TEAM SECTION REMOVED COMPLETELY */}
        
      </div>
    </section>
  );
};

export default About;
