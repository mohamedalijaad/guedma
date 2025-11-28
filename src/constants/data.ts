import { Product, TeamMember, Feature } from '../types';
import { Wifi, BarChart2, Globe, Bell, Brain } from 'lucide-react';

export const products = [
  {
    id: 1,
    name: "Couscous Tunisien à l’Agneau",
    description: "Le plat traditionnel incontournable : semoule parfumée, légumes mijotés et viande tendre.",
    image: "/couscous.jpg",
    features: ["Traditionnel", "Sans gaspillage", "Pour toute la famille"],
    
    ingredients: [
      "250 g de couscous fin",
      "1 c. à soupe de tomate concentrée",
      "500 g de viande d’agneau",
      "1 oignon",
      "2 clous de girofle",
      "Huile d’olive",
      "1 poignée de pois chiches trempés",
      "Une poignée de raisins secs",
      "2 poivrons",
      "1 c. à café de harissa",
      "2 œufs durs",
      "2 c. à café de paprika",
      "2 c. à café de curcuma",
      "Sel et poivre"
    ],

    steps: [
      "Faire chauffer l’huile dans une marmite, frire poivrons et oignons.",
      "Retirer les poivrons, ajouter la viande, la tomate concentrée et la harissa.",
      "Couvrir d’eau chaude, assaisonner et ajouter les clous de girofle.",
      "Cuire les pois chiches séparément, ajouter les raisins secs et un peu de sauce.",
      "Préparer la semoule à la vapeur (15–20 min).",
      "Mélanger le couscous avec la sauce et servir avec viande, œufs, pois chiches et poivrons."
    ]
  },

  {
    id: 2,
    name: "Farfoucha au Kadid",
    description: "Un plat rustique du nord-ouest tunisien, riche en saveurs et très nourrissant.",
    image: "/farfoucha.jpg",
    features: ["Traditionnel", "Très parfumé", "Facile à préparer"],

    ingredients: [
      "300 g de tiges de fenouil (besbess)",
      "250 g de kadid",
      "300 g de couscous moyen",
      "1 oignon",
      "2 gousses d’ail",
      "2 c. à soupe de tomate",
      "1–2 piments secs",
      "5 c. à soupe d’huile d’olive",
      "Paprika, curcuma, poivre, sel",
      "Harissa (optionnel)",
      "700 ml d’eau"
    ],

    steps: [
      "Faire revenir oignon, ail, kadid et épices dans l’huile.",
      "Ajouter la tomate, le piment et les pois chiches si désiré.",
      "Ajouter les tiges de fenouil et couvrir d’eau.",
      "Laisser mijoter 30–40 minutes.",
      "Verser la semoule en pluie, mélanger et laisser cuire jusqu’à absorption.",
      "Couvrir quelques minutes avant de servir."
    ]
  },

  {
    id: 3,
    name: "Mloukhia Tunisienne",
    description: "Un plat emblématique, riche et intense, mijoté longuement pour obtenir une texture brillante.",
    image: "/mloukhia.jpg",
    features: ["Très riche", "Cuisson lente", "Saveur profonde"],

    ingredients: [
      "1 oignon",
      "3 c. à soupe d’huile d’olive",
      "2 gousses d’ail",
      "1 boîte moyenne de concentré de tomate",
      "2 branches de coriandre",
      "2 feuilles de laurier",
      "100 g de poudre de mloukhia",
      "500 g de viande (bœuf ou agneau)",
      "Sel, poivre, piment vert"
    ],

    steps: [
      "Mélanger ail, épices et tomate, enduire la viande.",
      "Faire revenir l’oignon dans l’huile puis ajouter la poudre de mloukhia.",
      "Ajouter progressivement de l’eau chaude pour obtenir une texture crémeuse.",
      "Ajouter la viande, tomate, laurier.",
      "Cuire à feu très doux pendant 5 heures.",
      "Arrêter quand la mloukhia devient brillante et l’huile remonte en surface."
    ]
  },

  {
    id: 4,
    name: "Ojja au Merguez",
    description: "Plat rapide et gourmand : tomates, œufs, merguez et épices.",
    image: "/ojja.jpg",
    features: ["Rapide", "Épicé", "Gourmand"],

    ingredients: [
      "4 merguez",
      "4 tomates mûres",
      "1 poivron vert",
      "2 gousses d’ail",
      "4 œufs",
      "1 c. à café de harissa",
      "1 c. à café de paprika",
      "Sel, poivre, huile d’olive"
    ],

    steps: [
      "Faire revenir les merguez en morceaux avec l’ail.",
      "Ajouter les tomates, le poivron, la harissa et le paprika.",
      "Laisser mijoter jusqu'à épaississement.",
      "Casser les œufs par-dessus, couvrir et cuire 5 minutes.",
      "Servir chaud avec du pain frais."
    ]
  },

  {
    id: 5,
    name: "Riz Djerbien (Rouz Jerbi)",
    description: "Plat vapeur du sud tunisien, riche en herbes et en saveurs.",
    image: "/rouzjerbi.jpg",
    features: ["Cuit à la vapeur", "Très parfumé", "Version saine"],

    ingredients: [
      "500 g de riz",
      "400 g de viande (agneau, bœuf ou poulet)",
      "1 oignon",
      "2 gousses d’ail",
      "1 c. à soupe de concentré de tomate",
      "1 c. à café d’harissa",
      "Curcuma, paprika, sel, poivre",
      "Persil et épinards hachés",
      "2 c. à soupe d’huile d’olive"
    ],

    steps: [
      "Mélanger tous les ingrédients dans un saladier.",
      "Ajouter un demi-verre d’eau et bien enrober le riz.",
      "Cuire dans le haut du couscoussier pendant 45–60 minutes.",
      "Mélanger en cours de cuisson pour éviter les amas.",
      "Servir chaud avec un filet d’huile d’olive."
    ]
  },

  {
    id: 6,
    name: "Marqa Jelbana (Ragoût de Petits Pois et Poulet)",
    description: "Ragoût de petits pois au poulet, typiquement servi au printemps.",
    image: "/jelbana.jpg",
    features: ["Familial", "Léger", "Facile"],

    ingredients: [
      "1 kg de poulet",
      "400 g de petits pois",
      "3 carottes",
      "1 oignon",
      "1 c. à soupe de tomate concentrée",
      "1 c. à café d’harissa",
      "1 c. à café de curcuma",
      "1 poivron vert",
      "Huile d’olive, sel, poivre"
    ],

    steps: [
      "Faire revenir poulet, oignon et huile dans une cocotte.",
      "Ajouter harissa, curcuma, tomate et un verre d’eau.",
      "Laisser cuire 5 minutes.",
      "Ajouter petits pois, carottes et poivrons.",
      "Laisser mijoter 40–50 minutes.",
      "Servir chaud avec du pain ou du riz."
    ]
  }
];



export const features: Feature[] = [
  {
    id: 1,
    title: "Scan intelligent des ingrédients",
    description:
      "Prenez une photo ou entrez vos ingrédients, Guedma analyse automatiquement ce que vous avez.",
    icon: "Scan",
    image: "/fonctionnalites/scan.jpg"
  },
  {
    id: 2,
    title: "Recettes personnalisées",
    description:
      "Des recettes tunisiennes adaptées à vos goûts, votre temps et vos ingrédients disponibles.",
    icon: "ChefHat",
    image: "/fonctionnalites/recettes.jpg"
  },
  {
    id: 3,
    title: "Liste d’achats automatique",
    description:
      "Votre liste se génère toute seule selon les ingrédients manquants. Simple et pratique.",
    icon: "ShoppingCart",
    image: "/fonctionnalites/liste.jpg"
  },
  {
    id: 4,
    title: "Astuces anti-gaspillage",
    description:
      "Transformez vos restes grâce à nos astuces intelligentes anti-gaspi.",
    icon: "Sprout",
    image: "/fonctionnalites/gaspi.jpg"
  },
  {
    id: 5,
    title: "Cuisine tunisienne authentique",
    description:
      "Explorez des recettes tunisiennes certifiées authentiques, riches en tradition.",
    icon: "BookOpen",
    image: "/fonctionnalites/authentique.jpg"
  },
  {
    id: 6,
    title: "Interface simple et moderne",
    description:
      "Un design fluide, intuitif et inspiré des couleurs tunisiennes. Mode sombre inclus.",
    icon: "Lightbulb",
    image: "/fonctionnalites/interface.jpg"
  }
];


import { 
  Scan, 
  ChefHat, 
  ShoppingCart, 
  Sprout, 
  BookOpen 
} from 'lucide-react';

export const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Scan':
      return Scan;
    case 'ChefHat':
      return ChefHat;
    case 'ShoppingCart':
      return ShoppingCart;
    case 'Sprout':
      return Sprout;
    case 'BookOpen':
      return BookOpen;
    default:
      return ChefHat;
  }
};
