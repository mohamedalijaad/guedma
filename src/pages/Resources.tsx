import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Recycle,
  Utensils,
  Video,
  Info,
  X,
  Search,
} from "lucide-react";

interface ResourcesPageProps {
  isDarkMode: boolean;
}

interface ResourceItem {
  title: string;
  description: string;
  category: string;
  image: string;
  icon: React.FC<{ size?: number }>;
  content: {
    intro: string;
    sections: { title: string; content: string }[];
    conclusion: string;
  };
}

const categories = [
  "Astuces",
  "Techniques",
  "PDF",
  "Vidéos",
  "Glossaire",
  "Pain & Tradition",
  "Recettes",
  "Street Food",
  "Desserts",
  "Salades",
  "Tradition"
];

const ResourcesPage: React.FC<ResourcesPageProps> = ({ isDarkMode }) => {
  const [selected, setSelected] = useState<ResourceItem | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const resources: ResourceItem[] = [

    /* ===============================
       EXISTING ORIGINAL 6 ARTICLES
    =============================== */
    {
      title: "Astuces Anti-Gaspillage",
      description: "Comment cuisiner malin et réduire le gaspillage alimentaire.",
      category: "Astuces",
  image: "/ressources/anti-gaspi.jpg",
      icon: Recycle,
      content: {
  intro:
    "En Tunisie, rien ne se jette : chaque ingrédient peut renaître dans un nouveau plat. Ces astuces anti-gaspi sont inspirées des méthodes de nos grands-mères, où la cuisine était un art de transformer, conserver et valoriser chaque saveur.",

  sections: [
    {
      title: "1. Réutiliser intelligemment les restes",
      content:
        "Les restes de couscous deviennent un tajine au four, le pain rassis se transforme en fricassés ou en pain perdu, et les légumes cuits servent de base pour une sauce méchouia. L’idée est simple : ne jamais voir un reste comme une fin, mais comme un ingrédient de départ."
    },
    {
      title: "2. Organiser le frigo à la tunisienne",
      content:
        "Nos mamans plaçaient toujours les produits les plus anciens devant. Classez par zones : légumes, laitages, viandes, sauces. Gardez les tomates mûres dans un bol pour les transformer rapidement en sauce ou en chakchouka."
    },
    {
      title: "3. Transformer plutôt que jeter",
      content:
        "Une tomate trop mûre devient une base parfaite pour ojja. Une pomme de terre cuite peut enrichir une salade. Le pain sec se mixe en chapelure maison. Les fanes de carottes deviennent un pesto. Chaque aliment possède une seconde vie."
    }
  ],

  conclusion:
    "L’anti-gaspi n’est pas une tendance moderne en Tunisie : c’est un héritage transmis depuis des générations. Avec ces gestes simples, vous cuisinez plus malin… tout en respectant la tradition."
}

    },

    {
      title: "Techniques de Cuisine Tunisienne",
      description: "Les bases indispensables : cuisson, épices et tradition.",
      category: "Techniques",
  image: "/ressources/techniques.jpg",
      icon: Utensils,
      content: {
  intro:
    "La cuisine tunisienne repose sur des techniques ancestrales, souvent transmises oralement. Maîtriser ces bases, c’est comprendre l’âme culinaire du pays : patience, chaleur et respect du produit.",

  sections: [
    {
      title: "1. Le Tabil : l’empreinte aromatique tunisienne",
      content:
        "Le tabil est un mélange unique : coriandre séchée, carvi, ail et parfois piment séché. Il donne aux sauces tunisiennes leur parfum caractéristique. Ajoutez-le toujours en début de cuisson pour libérer ses arômes."
    },
    {
      title: "2. La semoule du couscous : aérée et vivante",
      content:
        "L’astuce des grand-mères : travailler la semoule avec de l’eau tiède en petites incorporations, puis cuire en plusieurs passages à la vapeur. Ne jamais la noyer dans l’eau. Chaque grain doit rester séparé, léger, presque brillant."
    },
    {
      title: "3. Les cuissons lentes : le vrai secret tunisien",
      content:
        "Mloukhia, kabkabou, gnawiya… ces plats ne tolèrent pas la précipitation. Une cuisson douce permet aux épices de s’ancrer dans l’huile et à la viande de devenir fondante. Dans la tradition, on laisse ‘chuchoter’ le plat pendant des heures."
    }
  ],

  conclusion:
    "Maîtriser ces techniques transforme chaque recette en un voyage authentique dans les cuisines tunisiennes."
}

    },

    {
      title: "Guides & Recettes PDF",
      description: "Téléchargez vos fiches pratiques.",
      category: "PDF",
  image: "/ressources/guides.jpg",
      icon: BookOpen,
      content: {
  intro:
    "Les fiches PDF Guedma sont pensées comme des compagnons de cuisine : claires, visuelles, détaillées, inspirées des recettes authentiques tunisiennes tout en restant simples à suivre.",

  sections: [
    {
      title: "Contenu riche et structuré",
      content:
        "Chaque guide inclut ingrédients, étapes illustrées, temps de cuisson, budgets estimatifs, astuces familiales et variantes régionales. Un format idéal pour apprendre et transmettre."
    },
    {
      title: "Exemples complets",
      content:
        "Couscous traditionnel, mloukhia du Sud, tajine malsouka, fricassés, slata tounsia… Chaque recette a été testée pour garantir un résultat fidèle aux saveurs tunisiennes."
    },
    {
      title: "Utilité",
      content:
        "Les PDF fonctionnent hors-ligne et se conservent facilement. Parfaits pour cuisiner en voyage, chez la famille, dans une résidence étudiante ou en camping."
    }
  ],

  conclusion:
    "Téléchargez, apprenez, cuisinez : vos recettes tunisiennes à portée de main, même sans Internet."
}

    },

    {
      title: "Vidéos & Tutoriels",
      description: "Apprenez en quelques secondes.",
      category: "Vidéos",
  image: "/ressources/videos.jpg",
      icon: Video,
      content: {
  intro:
    "Les vidéos Guedma vous montrent les gestes exacts de la cuisine tunisienne : la façon de retourner un brik, de travailler la semoule, d’allumer une sauce, ou de monter un tajine malsouka.",

  sections: [
    {
      title: "Les recettes populaires",
      content:
        "Chakchouka maison, couscous express, mloukhia étape par étape, brik à l’œuf, fricassés… Chaque tutoriel est conçu pour mémoriser facilement les mouvements."
    },
    {
      title: "Pourquoi la vidéo ?",
      content:
        "Certaines techniques ne s’expliquent pas avec des mots : il faut voir les mains, le rythme, la texture. La vidéo transmet l’essence du geste tunisien."
    },
    {
      title: "Nouveautés hebdomadaires",
      content:
        "Chaque semaine, des nouvelles recettes, des astuces de chefs, et des techniques régionales tournées dans un style simple et chaleureux."
    }
  ],

  conclusion:
    "Regarder, reproduire, réussir : la cuisine tunisienne n’a jamais été aussi accessible."
}

    },

    {
      title: "Glossaire Culinaire",
      description: "Comprendre les termes tunisiens.",
      category: "Glossaire",
  image: "/ressources/glossaire.jpg",
      icon: Info,
      content: {
  intro:
    "Le vocabulaire culinaire tunisien est riche, poétique et très spécifique. Ce glossaire vous aide à comprendre les mots que l’on retrouve dans toutes les cuisines du pays.",

  sections: [
    {
      title: "Tabil",
      content:
        "Mélange d’épices emblématique : coriandre séchée, carvi, ail et piment. Il parfume couscous, sauces rouges, kabkabou, ojja et même certaines marinades."
    },
    {
      title: "Kadid",
      content:
        "Viande séchée au soleil, conservée dans l’huile d’olive. Utilisée dans la mloukhia, la chorba ou la gnawiya. Son goût est puissant, ancré dans les traditions rurales."
    },
    {
      title: "Bsissa",
      content:
        "Farine grillée (orge ou blé), mélangée à des épices, utilisée au petit-déjeuner ou comme booster énergétique. Héritée d’une tradition très ancienne."
    }
  ],

  conclusion:
    "Comprendre ces termes, c’est entrer dans la culture et l’histoire gastronomique tunisienne."
}

    },

    {
      title: "Pain Tabouna",
      description: "Secrets du pain traditionnel cuit au four en terre.",
      category: "Pain & Tradition",
  image: "/ressources/tabouna.jpg",
      icon: Utensils,
      content: {
  intro:
    "Le pain tabouna est plus qu’un aliment : c’est un symbole d’hospitalité. Au village, son parfum annonçait les grandes réunions de famille. Il est cuit dans un four en terre, chauffé au bois, donnant une croûte parfumée unique.",

  sections: [
    {
      title: "1. Une pâte simple mais vivante",
      content:
        "Farine, eau, sel, levure… mais pétrie longuement pour développer une texture souple. La pâte doit être tiède et légèrement collante : signe qu’elle donnera un tabouna moelleux."
    },
    {
      title: "2. La cuisson au four en argile",
      content:
        "Le four traditionnel atteint de très hautes températures. Le pain y adhère aux parois, gonfle rapidement et développe des arômes fumés. Un rituel ancestral encore présent dans de nombreux villages."
    },
    {
      title: "3. La version moderne",
      content:
        "À la maison, utilisez une pierre à pizza ou une poêle en fonte préchauffée. Badigeonnez légèrement d’huile d’olive pour retrouver la brillance et la souplesse du tabouna original."
    }
  ],

  conclusion:
    "Que ce soit au village ou en cuisine moderne, le tabouna reste un pain chaleureux, profondément lié à l’identité tunisienne."
}

    },

    /* ===============================
         15 NEW TUNISIAN ARTICLES
    =============================== */

    {
      title: "Chakchouka — Le Guide Ultime",
      description: "Tomates, poivrons, œufs : un classique tunisien.",
      category: "Recettes",
  image: "/ressources/chakchouka.jpg",
      icon: Utensils,
      content: {
  intro:
    "La chakchouka est l’une des recettes les plus anciennes du Maghreb. En Tunisie, elle est considérée comme un repas du cœur : simple, parfumée, nourrissante. Elle était souvent préparée le matin ou pour accueillir un invité à l’improviste.",

  sections: [
    {
      title: "1. Ingrédients essentiels",
      content:
        "Tomates mûres, oignons doux, poivrons verts (ou rouges pour une version plus sucrée), une bonne cuillère de tabil et un filet d’huile d’olive. Les œufs sont ajoutés en fin de cuisson pour garder un jaune crémeux."
    },
    {
      title: "2. Technique traditionnelle",
      content:
        "Faire revenir oignons + poivrons lentement pour extraire leur douceur. Ajouter la tomate râpée, puis les épices. Laisser réduire progressivement jusqu’à obtenir une sauce dense et brillante. Ajouter les œufs sans mélanger pour un résultat authentique."
    },
    {
      title: "3. Variantes régionales",
      content:
        "• Avec merguez (version du Nord). • Avec pommes de terre pour plus de consistance. • Avec fromage fondant (version moderne). • À Djerba, certains ajoutent un peu de piment séché ‘felfel arbi’."
    }
  ],

  conclusion:
    "La chakchouka reflète l’âme tunisienne : généreuse, colorée et chaleureuse. Un plat simple… mais profondément symbolique."
}

    },

    {
      title: "Ojja Merguez",
      description: "Tomates pimentées + merguez + œufs.",
      category: "Recettes",
  image: "/ressources/ojja.jpg",
      icon: Utensils,
      content: {
  intro:
    "L'ojja merguez est l’un des plats les plus appréciés des Tunisiens. Une base tomate relevée, des merguez grillées, et des œufs délicatement posés. Un plat du quotidien, nourrissant, convivial, et parfait pour les soirées rapides.",

  sections: [
    {
      title: "1. Base tomate parfumée",
      content:
        "Harissa arbi, ail écrasé, tomate fraîche ou concassée. Faire revenir jusqu’à ce que l’huile prenne une couleur rouge profonde — signe que les épices sont bien torréfiées."
    },
    {
      title: "2. Merguez grillées",
      content:
        "Les merguez doivent être grillées séparément avant d’être ajoutées à la sauce. Cela évite qu’elles rendent trop de gras et libère leur parfum fumé caractéristique."
    },
    {
      title: "3. Finition aux œufs",
      content:
        "Les œufs ne doivent pas être entièrement mélangés : casser directement dans la sauce et couvrir quelques minutes. Le résultat idéal : un blanc bien cuit et un jaune fondant."
    }
  ],

  conclusion:
    "L’ojja merguez, c’est la rencontre entre la puissance des épices et la générosité des merguez. Un classique intemporel."
}

    },

    {
      title: "Kabkabou — Poisson à la Sauce Tomate",
      description: "Poisson mijoté au citron, olives et tomates.",
      category: "Recettes",
  image: "/ressources/kabkabou.jpg",
      icon: Lightbulb,
      content: {
  intro:
    "Le kabkabou est un plat du Nord tunisien, souvent préparé le vendredi. Sa sauce légère au citron, aux olives et au laurier en fait un des plats les plus parfumés de la cuisine tunisienne. Il est aussi l’un des rares plats où le poisson mijote doucement dans la sauce.",

  sections: [
    {
      title: "1. Choix du poisson",
      content:
        "Traditionnellement pageot, merlan ou grondin. Aujourd’hui, on utilise aussi saumon ou thon frais. Le poisson doit être coupé en morceaux épais pour ne pas se briser à la cuisson."
    },
    {
      title: "2. Une sauce douce et citronnée",
      content:
        "Tomates râpées, oignons émincés, ail, laurier, rondelles de citron, olives et parfois câpres. Une cuisson lente permet aux arômes de bien se fusionner sans agresser la chair du poisson."
    },
    {
      title: "3. Mijotage délicat",
      content:
        "Le poisson est déposé à la fin, puis laissé mijoter à feu doux. Il doit rester moelleux. Le secret : ne jamais remuer avec une cuillère, mais simplement secouer la marmite."
    }
  ],

  conclusion:
    "Frais, léger, parfumé : le kabkabou symbolise la finesse de la cuisine méditerranéenne tunisienne."
}

    },

    {
      title: "Couscous au Poulet — Version Sahel",
      description: "Un couscous léger et parfumé.",
      category: "Recettes",
  image: "/ressources/couscous.jpg",
      icon: BookOpen,
      content: {
  intro:
    "Chaque région possède son couscous, mais celui du Sahel (Sousse, Monastir, Mahdia) est réputé pour sa légèreté et son équilibre. Une sauce douce, des légumes fondants, un poulet grillé, et une semoule parfaitement aérée.",

  sections: [
    {
      title: "1. Légumes parfumés",
      content:
        "Carottes, courgettes, pommes de terre, pois chiches — tous mijotés dans une sauce légère parfumée au tabil, au curcuma et parfois à une pointe de tomate."
    },
    {
      title: "2. Poulet mariné et grillé",
      content:
        "Le poulet est mariné dans tabil + ail + citron + huile d’olive, puis grillé pour garder une peau croustillante et une chair tendre. Le poulet n’est ajouté à la sauce qu’à la fin."
    },
    {
      title: "3. Semoule aérienne",
      content:
        "La semoule est humidifiée en trois passages, séparée à la main et cuite à la vapeur. Le résultat : un couscous léger, qui absorbe parfaitement la sauce."
    }
  ],

  conclusion:
    "Un couscous familial, doux, équilibré : l’un des plats les plus appréciés des Tunisiens."
}

    },

    {
      title: "Mloukhia du Sud",
      description: "Une version plus épicée et forte.",
      category: "Tradition",
  image: "/ressources/mloukhia.jpg",
      icon: BookOpen,
      content: {
  intro:
    "La mloukhia tunisienne est unique au monde. Dans le Sud (Gabès, Médenine, Tataouine), elle est plus épicée, plus sombre et plus intense. C’est un plat sacré, souvent préparé lors des fêtes ou des grands événements familiaux.",

  sections: [
    {
      title: "1. Poudre de mloukhia",
      content:
        "La poudre doit être extra-fine, presque comme du talc. Dans la tradition, elle est tamisée plusieurs fois puis torréfiée légèrement pour renforcer son odeur profonde."
    },
    {
      title: "2. Épices du Sud",
      content:
        "Tabil, ail pilé, laurier, coriandre, parfois un soupçon de piment sec. Le tout est mélangé dans l’huile avant d’ajouter l’eau : c’est la phase la plus importante pour réussir la couleur."
    },
    {
      title: "3. Viande choisie",
      content:
        "Bœuf, osso buco, ou kadid (viande séchée) pour une version 100% traditionnelle. La viande mijote lentement jusqu’à devenir fondante."
    }
  ],

  conclusion:
    "La mloukhia est un rituel : elle prend du temps, mais le résultat est un plat profond, puissant et incomparable."
}

    },

    {
      title: "Lablabi Traditionnel",
      description: "Pois chiches, cumin, pain et harissa.",
      category: "Street Food",
  image: "/ressources/lablabi.jpg",
      icon: Utensils,
      content: {
  intro:
    "Le lablabi est bien plus qu’un bol de pois chiches : c’est un symbole social et culturel. Plat des étudiants, des travailleurs, des longs hivers et des petits budgets, il représente la Tunisie populaire dans toute sa générosité.",

  sections: [
    {
      title: "1. Base : pois chiches et bouillon",
      content:
        "Les pois chiches sont cuits longuement dans un bouillon parfumé à l’ail, au cumin et au laurier. Le parfum final dépend de la lenteur de cuisson : plus elle est longue, plus le goût est profond."
    },
    {
      title: "2. Assemblage au bol",
      content:
        "Un pain rassis découpé (khobz dar), du cumin frais moulu, de l’huile d’olive, du citron, et parfois une pointe de harissa. Chaque famille a sa manière de construire les couches."
    },
    {
      title: "3. Ajouts modernes",
      content:
        "Œuf poché, thon, olives, câpres, oignons, ou même une cuillère de mloukhia pour les fans. À Tunis, certains y ajoutent un filet de vinaigre maison."
    }
  ],

  conclusion:
    "Chaleureux, parfumé, réconfortant : le lablabi est un plat qui unit les Tunisiens autour d’un bol plein de simplicité et d’histoire."
}

    },

    {
      title: "Fricassé Tunisien",
      description: "Pain frit garni au thon, œuf, olives.",
      category: "Street Food",
  image: "/ressources/fricasse.jpg",
      icon: Lightbulb,
     content: {
  intro:
    "Le fricassé est le roi de la street-food tunisienne. Un petit pain frit, croustillant à l’extérieur et moelleux dedans, garni d’une crème de pommes de terre, de thon, d’œuf et de harissa. Né dans les familles juives tunisiennes, il est devenu un symbole national.",

  sections: [
    {
      title: "1. Le pain fricassé",
      content:
        "Une pâte légère, façonnée en petits ovales et frite juste le temps nécessaire pour obtenir une croûte fine et dorée. Le secret : une eau tiède, une levure bien activée et un repos suffisant."
    },
    {
      title: "2. Garniture authentique",
      content:
        "Pommes de terre écrasées, thon, œufs durs, olives, câpres. Les quantités varient d’une maison à une autre. À Djerba, on ajoute parfois des cornichons."
    },
    {
      title: "3. Harissa maison",
      content:
        "Un filet de harissa arbi ‘msaker’ lui donne son véritable caractère. Beaucoup diluent la harissa avec du citron et de l’huile pour obtenir une crème onctueuse."
    }
  ],

  conclusion:
    "Le fricassé est un voyage : croustillant, épicé, généreux, et toujours irrésistible."
}

    },

    {
      title: "Makrouna Tunisienne — Pâtes Harissa",
      description: "Le plat le plus populaire du pays.",
      category: "Recettes Rapides",
  image: "/ressources/makarouna.jpg",
      icon: Lightbulb,
      content: {
  intro:
    "La makrouna est probablement le repas le plus fréquent de Tunisie. Rapide, économique et incroyablement savoureux, ce plat existe dans des dizaines de versions selon les régions et les familles. Une véritable icône du quotidien.",

  sections: [
    {
      title: "1. Sauce rouge parfumée",
      content:
        "Tomate concentrée, harissa arbi, ail râpé, tabil. La sauce doit frire quelques minutes dans l’huile pour intensifier sa couleur et son parfum — un geste indispensable."
    },
    {
      title: "2. Choix de la viande",
      content:
        "Version thon (classique des étudiants), poulet, boulettes de viande, ou même merguez. Plus la viande dore, meilleure sera la profondeur de la sauce."
    },
    {
      title: "3. Cuisson des pâtes",
      content:
        "Toujours al dente. Les pâtes doivent absorber la sauce hors feu pendant une minute pour un enrobage parfait."
    }
  ],

  conclusion:
    "Simple, épicée, réconfortante — la makrouna est l’âme de la cuisine tunisienne rapide."
}

    },

    {
      title: "Tajine Malsouka",
      description: "Croquant et fondant à la fois.",
      category: "Tradition",
  image: "/ressources/tajine.jpg",
      icon: BookOpen,
      content: {
  intro:
    "Le tajine tunisien n’a rien à voir avec le tajine marocain. Ici, il s’agit d’un gratin solide, découpé en parts triangulaires. Le tajine malsouka, avec ses feuilles ultrafines, est la version des grandes occasions : mariages, Ramadhan, baptêmes…",

  sections: [
    {
      title: "1. Garniture riche",
      content:
        "Pommes de terre cuites et écrasées, persil, viande hachée ou poulet émietté, œufs, fromage râpé. La garniture doit être suffisamment dense pour respecter la tenue du tajine."
    },
    {
      title: "2. Montage en couches",
      content:
        "Les feuilles de malsouka sont enduites d’un mélange œuf + huile pour éviter qu’elles ne se cassent. Plusieurs couches sont superposées pour obtenir une texture croustillante et dorée."
    },
    {
      title: "3. Cuisson parfaite",
      content:
        "Le tajine est cuit au four jusqu’à obtenir un dessus légèrement doré. Une fois refroidi, il se découpe comme un gâteau."
    }
  ],

  conclusion:
    "Croustillant dehors, fondant dedans — un incontournable des tables tunisiennes festives."
}

    },

    {
      title: "Slata Tounsia",
      description: "La salade tunisienne incontournable.",
      category: "Salades",
  image: "/ressources/slata.jpg",
      icon: Info,
      content: {
  intro:
    "La slata tounsia est LA salade de tous les jours. Fraîche, colorée, simple, elle accompagne presque chaque repas tunisien. C’est une salade solaire, qui reflète la fraîcheur du littoral méditerranéen.",

  sections: [
    {
      title: "1. Les légumes de base",
      content:
        "Tomates, concombres, oignons, parfois poivrons. Tous coupés très finement — presque en brunoise — pour permettre aux saveurs de se mélanger harmonieusement."
    },
    {
      title: "2. Ajouts classiques",
      content:
        "Thon, œufs durs, olives, un filet d’huile d’olive. Certains ajoutent du persil frais ou un peu d’ail écrasé."
    },
    {
      title: "3. Assaisonnement méditerranéen",
      content:
        "Citron frais, sel, poivre et une pointe de cumin selon les régions. L’huile d’olive doit être de bonne qualité : c’est elle qui donne toute la personnalité à la salade."
    }
  ],

  conclusion:
    "Simple, saine, délicieuse : la slata tounsia est un indispensable de la cuisine tunisienne."
}

    },

    {
      title: "Brik à l’Œuf",
      description: "Croustillante et emblématique.",
      category: "Street Food",
  image: "/ressources/brik.jpg",
      icon: Utensils,
      content: {
  intro:
    "La brik est un rituel du Ramadan. À l’heure de la rupture du jeûne, elle ouvre le repas et symbolise la générosité de la table tunisienne. Fine, croustillante, rapide — un geste que chaque Tunisien connaît par cœur.",

  sections: [
    {
      title: "1. Feuille de malsouka",
      content:
        "Plus la feuille est fine, meilleure sera la brik. Elle doit être souple pour éviter la casse. Certaines familles enduisent la feuille d’un peu d’huile avant le pliage."
    },
    {
      title: "2. Garniture essentielle",
      content:
        "Œuf entier, thon, persil, câpres, parfois fromage. Le secret : déposer l’œuf à froid et plier immédiatement pour éviter qu’il ne coule."
    },
    {
      title: "3. Cuisson rapide",
      content:
        "La brik doit frire à feu moyen pour devenir dorée et craquante sans brûler. Le jaune doit rester coulant — un signe de réussite incontournable."
    }
  ],

  conclusion:
    "Un symbole de partage et de plaisir : la brik tunisienne reste l’un des grands classiques de nos tables."
}

    },

    {
      title: "Gnaouia — Spécialité de Sfax",
      description: "Ragoût d’agneau aux gombos.",
      category: "Tradition",
  image: "/ressources/gnaouia.jpg",
      icon: BookOpen,
      content: {
  intro:
    "La gnaouia est le plat emblématique de Sfax : intense, profond et délicatement visqueux grâce aux gombos. C’est un ragoût noble, souvent préparé le dimanche ou lors des fêtes familiales. Chaque cuillerée raconte la cuisine sfaxienne : généreuse, lente et parfumée.",

  sections: [
    {
      title: "1. Les gombos — le cœur du plat",
      content:
        "Les Sfaxien(ne)s utilisent des gombos séchés pour une saveur plus concentrée. Ils sont rissolés doucement pour éliminer leur viscosité naturelle avant d’être intégrés à la sauce."
    },
    {
      title: "2. Une sauce profonde",
      content:
        "Tomate concentrée, ail, tabil, coriandre, piment sec et huile d’olive. Le mijotage doit être lent pour permettre aux gombos de se fondre dans la sauce."
    },
    {
      title: "3. La viande",
      content:
        "Agneau pour les grandes occasions, kadid (viande séchée) pour un goût plus traditionnel. La viande doit être tendre au point de se détacher facilement."
    }
  ],

  conclusion:
    "Un plat riche, unique en Tunisie, qui incarne l’identité authentique du Sahel et la finesse culinaire de Sfax."
}

    },

    {
      title: "Mhajeb / Mlewi",
      description: "Galette farcie du Sud tunisien.",
      category: "Street Food",
  image: "/ressources/mhajeb.jpg",
      icon: Lightbulb,
      content: {
  intro:
    "Les mhajeb (ou mlewi) sont des galettes feuilletées farcies, originaires du Sud tunisien. Vendues partout dans la rue, sur les marchés et dans les cafés, elles représentent la meilleure street-food chaude et commode du pays.",

  sections: [
    {
      title: "1. La pâte feuilletée",
      content:
        "Une pâte simple — farine, eau, sel — travaillée longuement à l’huile. Le secret : étirer la pâte jusqu’à transparence pour obtenir de nombreux feuillets croustillants."
    },
    {
      title: "2. Garniture traditionnelle",
      content:
        "Tomates, oignons, piment, parfois viande hachée. La compotée doit être bien réduite pour ne pas détremper la pâte."
    },
    {
      title: "3. Cuisson sur plaque chaude",
      content:
        "Les mhajeb sont cuits sur une plaque en fonte légèrement huilée. Le geste est rapide, précis : tourner, presser, retourner jusqu’à obtenir un feuilletage doré."
    }
  ],

  conclusion:
    "Moelleux, feuilletés, légèrement épicés : les mhajeb incarnent la chaleur et la générosité du Sud tunisien."
}

    },

    {
      title: "Mesfouf Sucré",
      description: "Semoule légère aux fruits secs.",
      category: "Desserts",
  image: "/ressources/mesfouf.jpg",
      icon: Lightbulb,
      content: {
  intro:
    "Le mesfouf est la version tunisienne du couscous sucré. Très apprécié durant Ramadan et les célébrations familiales, il associe semoule légère et fruits secs parfumés. C’est un dessert simple mais profondément réconfortant.",

  sections: [
    {
      title: "1. Semoule fine et légère",
      content:
        "La semoule est cuite à la vapeur (comme pour un couscous salé) puis aérée avec du beurre fondu. Elle doit rester sèche, jamais collante."
    },
    {
      title: "2. Fruits secs et parfums",
      content:
        "Raisins secs, dattes, amandes, pistaches, grenades selon la saison. On ajoute parfois un peu d’eau de fleur d’oranger ou de cannelle pour un parfum plus oriental."
    },
    {
      title: "3. Version festive",
      content:
        "Dans certaines régions, on ajoute du lait caillé, du sucre glace ou même du yaourt pour une texture plus crémeuse."
    }
  ],

  conclusion:
    "Léger, parfumé et symbolique : le mesfouf accompagne les soirées familiales et les petites festivités tunisiennes."
}

    },

    {
      title: "Yoyos — Beignets Tunisiens",
      description: "Beignets imbibés de sirop parfumé.",
      category: "Desserts",
  image: "/ressources/yoyos.jpg",
      icon: BookOpen,
      content: {
  intro:
    "Les yoyos sont des petits beignets ronds, dorés et trempés dans un sirop parfumé. Ils sont omniprésents dans les fêtes, les goûters et surtout durant Ramadan. Leur texture moelleuse et leur parfum d’orange rappellent les desserts de nos grands-mères.",

  sections: [
    {
      title: "1. Une pâte parfumée",
      content:
        "Farine, œufs, sucre, huile, levure et zeste d’orange. La pâte doit être souple et bien reposée pour garantir un gonflage homogène."
    },
    {
      title: "2. Friture douce",
      content:
        "Les yoyos doivent frire dans une huile moyenne, pas trop chaude, pour garder une texture moelleuse sans brûler l’extérieur."
    },
    {
      title: "3. Sirop aromatisé",
      content:
        "A base de miel, eau de fleur d’oranger, sucre et citron. Tremper les yoyos encore tièdes pour qu’ils absorbent parfaitement le sirop."
    }
  ],

  conclusion:
    "Dorés, parfumés et tendres : les yoyos sont l’un des desserts les plus emblématiques de la pâtisserie tunisienne."
}

    }

  ];

  /* =============================
       FILTERING + UI LOGIC
  ============================== */

  const filteredResources = resources.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "Tous" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <main
      className={`pt-20 pb-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Ressources <span className="text-primary">Guedma</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Explorez conseils, recettes, astuces, PDF, vidéos et traditions tunisiennes.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-xl shadow-md outline-none ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setActiveCategory("Tous")}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === "Tous"
                ? "bg-primary text-white"
                : "bg-transparent"
            }`}
          >
            Tous
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className={`rounded-xl overflow-hidden shadow-lg cursor-pointer ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                onClick={() => setSelected(item)}
              >
                <img src={item.image} className="w-full h-48 object-cover" />

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon size={24} className="text-primary" />
                    <span className="text-sm bg-primary/20 text-emerald-700 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-8 shadow-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X size={22} />
              </button>

              <img
                src={selected.image}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>

              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {selected.content.intro}
              </p>

              {selected.content.sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {section.content}
                  </p>
                </div>
              ))}

              <p className="mt-10 text-lg font-medium border-t pt-6">
                {selected.content.conclusion}
              </p>
            </motion.div>
          </div>
        )}

      </div>
    </main>
  );
};

export default ResourcesPage;
