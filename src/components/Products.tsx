import React from 'react';
import { motion } from 'framer-motion';
import { products as recipes } from '../constants/data';
import { useNavigate } from 'react-router-dom';   // 👈 IMPORTANT

const Products: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {

  const navigate = useNavigate();  // 👈 IMPORTANT

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <section 
      id="products"
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Nos <span className="text-primary">Recettes Populaires</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-8" 
            variants={itemVariants}
          ></motion.div>

          <motion.p 
            className="text-base md:text-lg"
            variants={itemVariants}
          >
            Découvrez une sélection de recettes tunisiennes authentiques,
            adaptées aux ingrédients que vous avez déjà chez vous, pour une cuisine simple, rapide et sans gaspillage.
          </motion.p>
        </motion.div>

        {/* RECIPE CARDS */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}
              >

                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>

                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {recipe.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {recipe.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="inline-block bg-beige-bg text-emerald-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON — FIXED */}
                  <div className="mt-6 flex items-center justify-end">
                    <motion.button
                      onClick={() => navigate(`/recettes/${recipe.id}`)}   // 👈 FIXED
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir la recette
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          {/* VIEW ALL */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="#recipes"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir toutes les recettes
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Products;
