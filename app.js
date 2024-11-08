const express = require("express")
const DBconnect= require("./jsConfig/configMongoose")
const router = require("./API/Routes/routes")
const app = express()
//Permet de nous connecter à notre base de donnée
DBconnect(app)

//Définition du chemin de notre API
app.use(express.json())

app.use("/api/",router)

app.get("/",(req,res) => {
    res.send("Bienvenue sur notre api")
})

app.get("/AddUsers", async (req,res) => {
    res.send("Utilisateurs connectés")
})