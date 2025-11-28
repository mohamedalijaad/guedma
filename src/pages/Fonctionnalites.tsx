import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scan,
  ChefHat,
  ShoppingCart,
  Sprout,
  BookOpen,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FonctionnalitesProps {
  isDarkMode: boolean;
}

const Fonctionnalites: React.FC<FonctionnalitesProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: "scan",
      title: "Scan intelligent des ingrédients",
      description:
        "Prenez une photo de vos ingrédients ou entrez-les manuellement. Guedma identifie ce que vous avez déjà dans votre cuisine et prépare une analyse instantanée.",
      icon: <Scan className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/scan.jpg",
    },
    {
      id: "suggestions",
      title: "Recettes personnalisées",
      description:
        "Notre moteur de recommandation vous propose des recettes tunisiennes adaptées à vos ingrédients, votre temps disponible et vos préférences.",
      icon: <ChefHat className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/recettes.jpg",
    },
    {
      id: "liste",
      title: "Liste d’achats automatique",
      description:
        "Guedma génère une liste d’achats intelligente qui complète ce qu’il vous manque. Plus besoin de réfléchir : tout est trié et organisé.",
      icon: <ShoppingCart className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/liste.jpg",
    },
    {
      id: "antigaspi",
      title: "Astuces anti-gaspillage",
      description:
        "Optimisez vos restes : Guedma vous propose des astuces, des idées bonus, et des alternatives pour éviter le gaspillage alimentaire.",
      icon: <Sprout className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/gaspi.jpg",
    },
    {
      id: "catalogue",
      title: "Cuisine tunisienne authentique",
      description:
        "Des recettes tunisiennes authentiques, organisées par catégories : couscous, mloukhiya, ojja, kabkabou, pâtisseries traditionnelles…",
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/authentique.jpg",
    },
    {
      id: "interface",
      title: "Interface simple et moderne",
      description:
        "Profitez d’une interface fluide, intuitive et élégante. Navigation rapide, mode sombre, et design inspiré des couleurs tunisiennes.",
      icon: <Smartphone className="w-7 h-7 text-primary" />,
      image: "/fonctionnalites/interface.jpg",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const blocks = containerRef.current.querySelectorAll(".feature-block");

    blocks.forEach((block) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Nos <span className="text-primary">Fonctionnalités</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Découvrez comment Guedma vous aide à cuisiner mieux, plus vite, et
          sans gaspillage.
        </motion.p>
      </section>

      {/* FEATURE SECTIONS */}
      <div className="container mx-auto px-6 py-20 space-y-32">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`feature-block flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-800 aspect-video flex items-center justify-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
            </motion.div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">
              <div
                className={`p-4 w-fit rounded-full mb-4 ${
                  isDarkMode ? "bg-primary/20" : "bg-beige-bg"
                }`}
              >
                {section.icon}
              </div>

              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>

              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fonctionnalites;
