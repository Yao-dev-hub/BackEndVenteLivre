const livres = async (db) => {
    try {
      let livreCollections = db.collection("Livres")
  
      let result = await livreCollections.insertMany(
        [{
          titre: "Sur les nuages",
          auteur: "Koffi Ange",
          genre: "poeme",
          anneePublication: 2002,
          disponible: true,
          image:"/img/livre1.jpg"
        },
        {
          titre: "Eloquent JavaScript",
          auteur: "Kyle Simpson",
          genre: "Programmation JavaScript",
          anneePublication: 1975,
          disponible: true,
          image:"/img/livre2.jpg"
        },
        {
          titre: "python: The Good Parts",
          auteur: "Marijn Haverbeke",
          genre: "Programmation python",
          anneePublication: 1950,
          disponible: false,
          image:"/img/livre3.jpg"
        },
        {
          titre: "Eloquent Java",
          auteur: "Douglas crokFord",
          genre: "Programmation Java",
          anneePublication: 2096,
          disponible: true,
          image:"/img/livre4.jpg"
        },
        {
          titre: "Getting Things Done",
          auteur: "Alfredo Geogio",
          genre: "Programmation python",
          anneePublication: 2010,
          disponible: false,
          image:"/img/livre5.jpg"
        },
        {
          titre: "The Lean Startup",
          auteur: "Marvin kevin",
          genre: "Entrepreneuriat, Gestion d'entreprise",
          anneePublication: 1991,
          disponible: false,
          image:"/img/livre6.jpeg"
        },
        {
          titre: "Le pouvoir du moment présent",
          auteur: "Modric Alvin",
          genre: "Spiritualité",
          anneePublication: 2013,
          disponible: true,
          image:"/img/livre7.jpg"
        },
        {
          titre: "The Pragmatic Programmer",
          auteur: "Abraham Jean ",
          genre: "Programmation PHP",
          anneePublication: 1996,
          disponible: false,
          image:"/img/livre8.jpg"
        },
        {
          titre: "Atomic Habits",
          auteur: "Joel Kouakou",
          genre: "Développement personnel, Productivité",
          anneePublication: 2022,
          disponible: true,
          image:"/img/livre9.jpg"
        },
        {
          titre: "MongoDB: The Definitive Guide",
          auteur: "Loice Anne",
          genre: "Programmation MongoDB",
          anneePublication: 1998,
          disponible: true,
          image:"/img/livre10.jpg"
        }]
      )
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  module.exports = livres