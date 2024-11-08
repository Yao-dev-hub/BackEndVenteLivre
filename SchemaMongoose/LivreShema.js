const mongoose = require("mongoose")

//Creation de shema
const livreShema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    genre: { type: String, required: true },
    anneePublication: { type: Number, required: true },
    disponible: { type: Boolean, required: true },
    image: { type: String, required: true },
    dateAjout: { type: Date, required: true },
    prix: { type: Number, required: true },
    description: { type: String, required: true },
    etat: { type: String, required: true }, //enum: ['neuf', 'comme neuf', 'bon', 'acceptable'] 
    quantiteInitial: { type: Number, default: 1 },
    quantiteEnStock: { type: Number, default: 1 },
    idMarchant: { type: String, required: true }
})


//Conneter notre shema à notre collection
module.exports = mongoose.model("Livres", livreShema)

