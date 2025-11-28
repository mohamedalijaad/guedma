import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products as recipes } from "../constants/data";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const RecetteDetails: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Recette introuvable</h1>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <section
      className={`min-h-screen py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary-light mb-6"
        >
          <ArrowLeft size={20} /> Retour
        </button>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          {recipe.name}
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-80 overflow-hidden rounded-xl shadow-lg mb-8"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Description */}
        <p className="text-lg mb-6 opacity-90">{recipe.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-10">
          {recipe.features?.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-beige-bg text-emerald-900 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Ingredients */}
        {recipe.ingredients && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Ingrédients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        {recipe.steps && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Préparation</h2>
            <ol className="list-decimal pl-5 space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="opacity-90 leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecetteDetails;
