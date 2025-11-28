import React from "react";
import { motion } from "framer-motion";
import {
  Scan,
  Utensils,
  ShoppingCart,
  Calendar,
  Leaf,
} from "lucide-react";

interface Props {
  isDarkMode: boolean;
}

const Fonctionnalites: React.FC<Props> = ({ isDarkMode }) => {
  const cardClass = `${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all`;

  const features = [
    {
      title: "Scan d’ingrédients (IA)",
      description:
        "Analyse intelligente de vos ingrédients grâce à la caméra ou à la saisie manuelle.",
      icon: Scan,
    },
    {
      title: "Suggestions de recettes tunisiennes",
      description:
        "Génération instantanée de recettes adaptées à ce que vous avez déjà chez vous.",
      icon: Utensils,
    },
    {
      title: "Listes de courses automatiques",
      description:
        "Les ingrédients manquants s’ajoutent automatiquement à votre panier.",
      icon: ShoppingCart,
    },
    {
      title: "Menus hebdomadaires intelligents",
      description:
        "Planifiez une semaine complète de repas variés, adaptés à vos préférences.",
      icon: Calendar,
    },
  ];

  return (
    <main
      className={`pt-24 pb-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto px-4 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Découvrez les{" "}
          <span className="text-primary">fonctionnalités</span> de Guedma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-80"
        >
          Scannez vos ingrédients. Obtenez des recettes tunisiennes adaptées.
          Cuisinez malin. Zéro gaspi.
        </motion.p>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cardClass}
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-4">
                  <Icon size={36} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="opacity-80">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ANTI GASPI */}
      <section
        className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          
          {/* Placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-full h-72 rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold opacity-70">
              IMAGE
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Optimisez vos <span className="text-primary">ingrédients</span>
            </h3>

            <ul className="space-y-3 text-lg opacity-80">
              <li>• Analyse des dates d’expiration</li>
              <li>• Conseils anti-gaspi basés sur vos ingrédients</li>
              <li>• Gestion intelligente du frigo</li>
              <li>• Réduction du gaspillage alimentaire</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TUNISIAN HERITAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Pour les Tunisiens, <span className="text-primary">par des Tunisiens</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[ "Couscous", "Mloukhia", "Chakchouka" ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-6`}
            >
              <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4 flex items-center justify-center font-bold opacity-70">
                IMAGE
              </div>
              <h4 className="text-xl font-semibold">{p}</h4>
              <p className="opacity-70 mt-2">
                Recette traditionnelle revisitée par Guedma.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <Leaf size={42} className="text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4">Rejoignez l’expérience Guedma</h2>
        <p className="opacity-70 mb-8">Disponible bientôt sur iOS & Android</p>

        <button className="px-8 py-4 bg-primary text-white rounded-xl text-lg hover:bg-primary-light transition">
          Être notifié du lancement
        </button>
      </section>
    </main>
  );
};

export default Fonctionnalites;
