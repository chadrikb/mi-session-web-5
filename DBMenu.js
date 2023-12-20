const menu = {
  breuvage: {
    nomCategorie: "Breuvages",
    fond: "fond-breuvage",
    items: [
      {
        nom: "Café",
        Slug: "cafe",
        img: "/src/assets/cafe.jpg",
        prix: "3.50$",
        description:
          "Le café biologique est cultivé avec un profond respect pour la nature, sans l'utilisation de pesticides ou d'engrais chimiques, offrant ainsi une tasse de café d'une pureté exceptionnelle, tout en préservant l'équilibre de l'écosystème. Chaque gorgée de ce café biologique éveille vos sens avec des saveurs riches et authentiques, tout en vous permettant de savourer le goût de la durabilité dans chaque tasse.",
      },
      {
        nom: "Boissons gazeuses",
        Slug: "boissons-gazeuses",
        img: "/src/assets/boisson-gaseuses.jpg",
        prix: "3.00$",
        description:
          "Rafraîchissez-vous avec une sélection pétillante de boissons gazeuses, des classiques intemporels aux saveurs exotiques qui éveilleront vos papilles. Voici nos options: Coca-cola, Pepsi, Sprite, Fanta, Dr. Pepper",
      },
      {
        nom: "Thé glacé",
        Slug: "the-glacee",
        img: "/src/assets/the-glacee.jpg",
        prix: "4.00$",
        description:
          "Savourez la fraîcheur de notre thé glacé, une boisson rafraîchissante et délicieusement parfumée qui éveille vos sens avec chaque gorgée. Préparé avec des ingrédients de première qualité, notre thé glacé offre un équilibre parfait entre douceur et vivacité, une véritable oasis de rafraîchissement pour les journées ensoleillées.",
      },
    ],
  },
  entree: {
    nomCategorie: "Entrées",
    fond: "fond-entree",
    items: [
      {
        nom: "Salade du Jardin des Laurentides",
        Slug: "salade-du-jardin-des-laurentides",
        img: "/src/assets/salade.jpg",
        prix: "7.00$",
        description:
          "Cette salade est réalisée à partir des produits du Jardin des Laurentides situé à Mirabel. Fabriqué à partir d’un mélange de salade mesclun, de tomates de serres, concombres et carottes biologiques de champ ainsi que d’une vinaigrette à partir de sirop de bouleau et de moutarde des champs.",
      },
      {
        nom: "Entrée de chips maison aux épices Boréales",
        Slug: "entree-de-chips-maison-aux-epices-boreales",
        img: "/src/assets/sean-mcclintock-789423-unsplash.jpg",
        prix: "5.00$",
        description:
          "Cette délicieuse entrée de chips maison assaisonnées du mélange d’épices boréales peut aussi servir d’accompagnement de nos trois plats principaux. Ces patates proviennent d’un producteur situé à Mirabel.",
      },
    ],
  },
  plats: {
    nomCategorie: "Les plats principaux",
    fond: "fond-plats",
    items: [
      {
        nom: "Sandwich du jardin",
        Slug: "sandwich-du-jardin",
        img: "/src/assets/sandwich-vege.jpg",
        prix: "10.00$",
        description:
          "Le sandwich du jardin est réalisé à partir des légumes biologiques produits par le Jardin des Laurentides situé à Mirabel. Le pain utilisé est d’une fabrication artisanale de la boulangerie des Monts à Saint-Jovite. Le fromage provient de la Fromagerie du Diable de Mont-Tremblant. Le brie utilisé est fait à partir de lait de vache en liberté dans les pâturages des montages de la région.",
      },
      {
        nom: "Trilogie de mini poulet burger",
        Slug: "trilogie-de-mini-poulet-burger",
        img: "/src/assets/sameer-waskar-488251-unsplash.jpg",
        prix: "12.00$",
        description:
          "La trilogie de mini poulet burger est tout simplement sublime. Fait à partir de poitrines de poulet biologiques des Volailles du Nord de Saint-Jovite, elles sont marinées à partir d’une sélection d’épices boréales. Ces burgers sont montés sur un petit pain de fabrication artisanale de la Boulangerie des Monts à Saint-Jovite. Le fromage cheddar vieilli 5 ans provient de la Fromagerie du Diable de Mont-Tremblant. Ce fromage est fait à partir de lait de vache en libertés dans les pâturages des montages de la région. On y ajoute une petite tranche de tomate légèrement sucrée qui se marie bien avec la marinade du poulet. Ces délicieuses tomates proviennent du Jardin des Laurentides de Mirabel.",
      },
      {
        nom: "Sandwich du bûcheron",
        Slug: "sandwich-du-bucheron",
        img: "/src/assets/19326390.jpg",
        prix: "15.00$",
        description:
          "Le sandwich du bûcheron est fait à partir de porc effiloché confit dans du gras de canard des Volailles du Nord de Saint-Jovite. Notre porc biologique est soigneusement élevé directement par nous à Mont-Tremblant. La marinade est à base d’un mélange d’épices boréales et de sirop d’érable de l’Érablière du Nord de Sainte-Agathe. Le tout est surmonté d’une délicieuse salade de choux des Serres du Nord de Sainte-Agathe. La Boulangerie des Monts à Saint-Jovite nous a spécialement confectionné un délicieux pain brioché pour ce sandwich. ",
      },
    ],
  },
  dessert: {
    nomCategorie: "Le dessert",
    fond: "fond-dessert",
    items: [
      {
        nom: "1 Beigne de patate",
        Slug: "1-beigne-de-patate",
        img: "/src/assets/thomas-kelley-77413-unsplash.jpg",
        prix: "2.50$",
        description:
          "Les beignes de patate sont d’une fabrication artisanale basée sur une recette ancestrale. Les pommes de terre proviennent de la Ferme Hector Gagné de Mirabel. Ces beignes nécessitent aussi du sucre d’érable de l’Érablière du Nord de Sainte-Agathe.",
      },
      {
        nom: "3 Beigne de patate",
        Slug: "3-beigne-de-patate",
        img: "/src/assets/thomas-kelley-77413-unsplash.jpg",
        prix: "6.00$",
        description:
          "Les beignes de patate sont d’une fabrication artisanale basée sur une recette ancestrale. Les pommes de terre proviennent de la Ferme Hector Gagné de Mirabel. Ces beignes nécessitent aussi du sucre d’érable de l’Érablière du Nord de Sainte-Agathe.",
      },
      {
        nom: "6 Beigne de patate",
        Slug: "6-beigne-de-patate",
        img: "/src/assets/thomas-kelley-77413-unsplash.jpg",
        prix: "10.00$",
        description:
          "Les beignes de patate sont d’une fabrication artisanale basée sur une recette ancestrale. Les pommes de terre proviennent de la Ferme Hector Gagné de Mirabel. Ces beignes nécessitent aussi du sucre d’érable de l’Érablière du Nord de Sainte-Agathe.",
      },
    ],
  },
};

export default menu;
