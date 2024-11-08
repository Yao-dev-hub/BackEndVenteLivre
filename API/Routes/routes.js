const express = require("express")


//début de la crétion des routes
const router = express.Router()

//Importation des controleurs
const GetLivres = require("../Controleurs/showLivres")
const GetLivresByID = require("../Controleurs/getLivresByID")
const AddLivres = require("../Controleurs/addLivres")
const AddUsers = require("../Controleurs/addUsers")
const UserConnected = require("../Controleurs/ConnectUsers")
const AchatLivre = require("../Controleurs/AchatLivre")

//premiere page de API

//voir tous nos livres
router.get("/",async (req,res) => {
    GetLivres(res)
})

//consulter un livre par son id
router.get("/:id",async(req,res) =>{
    const id = req.params.id
    GetLivresByID(res,id)
})
//Ajouter un livre
router.post("/addlivres",async (req,res) =>{
    AddLivres(req,res)
})

//Ajout d'un utilisateur
router.post("/inscription",async (req,res) => {
    AddUsers(req,res)
})

//Connecter un utlisateur
router.post("/connexion",(req,res) => {
    UserConnected(req,res)
})

//Achat d'un livre
router.post("/achat",(req,res) => {
    AchatLivre(req,res)
})

module.exports = router