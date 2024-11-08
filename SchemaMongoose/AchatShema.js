const mongoose = require("mongoose")

const AchatShema = new mongoose.Schema({
    adresse:{type:String,require:true},
    tel:{type:String,require:true},
    quantite:{type:Number,require:true, min:1},
    reduction:{type:Number,require:true, min:0},
    client:{type:String,require:true},
    idLivre:{type:String,require:true,unique:true},
    dateAchat: { type: Date, default: Date.now },
    modeLivraison:{type:String,require:true},//[livraison à domicile,reception à l'agence
    prixLivraison :{type:Number,require:true, min:0},
    tva:{type:Number,require:true, default:0.075},
    netaPayer :{type:Number,require:true, min:0}
})


module.exports = mongoose.model("Achat",AchatShema)