const mongoose = require("mongoose")

const UtilisateurShema = new mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true,minlength:8},
    tel:{type:String,unique:true,required:true},
    typeCompte:{type:String,required:true},
    pays:{type:String,required:true},
    ville:{type:String,required:true},
    adresse:{type:String,required:true},
    modeConnexion:{type:String,required:true},
    dateCreationCompte:{type:Date,required:true},
    lastConnexion:{type:Date,required:true},
    etat:{type:Boolean,required:true},
})

module.exports = mongoose.model("Users",UtilisateurShema)