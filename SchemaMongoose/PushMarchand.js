const mongoose = require("mongoose")

const notificationMarchandSchema = new mongoose.Schema({
    idMarchant: { type: String, required: true },
    type: { type: String, required: true }, /* { 
      type: String, 
      required: true, 
      enum: ['commande', 'inventaire', 'client', 'autre'] 
    } */ // Type de notification
    message: { type: String, required: true },
    dateCreation: { type: Date, default: Date.now },
    lu: { type: Boolean, default: false }, // Statut de lecture
    idLivre:{type:String,require:true,unique:true}, // Optionnel, référence à un produit spécifique
    referenceCommande: {type:String,require:true,unique:true}, // Optionnel, référence à une commande spécifique
  });
  
  module.exports = mongoose.model('NotificationMarchand', notificationMarchandSchema);
  