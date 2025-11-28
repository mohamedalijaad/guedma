import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products as recipes } from '../constants/data'; // recipes == products

const Shop: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="recettes"
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Toutes les <span className="text-primary">Recettes</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-base md:text-lg">
            Explorez toutes les recettes tunisiennes proposées par Guedma.  
            Inspirez-vous, cuisinez malin et évitez le gaspillage.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Rechercher une recette…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg shadow-sm outline-none 
              ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
            `}
          />
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto">
          {filteredRecipes.length === 0 ? (
            <p className="text-center text-gray-500 text-lg py-8">
              Aucune recette ne correspond à votre recherche.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.4
                    }
                  }}
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

                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm`}>
                      {recipe.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.features.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-beige-bg text-emerald-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <motion.button
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir la recette
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Shop;
