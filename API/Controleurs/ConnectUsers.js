const mongoose = require("mongoose")
const UtilisateurShema = require("../../SchemaMongoose/UtilisateurShema")

const UserConnected = async (req,res) => {
    UtilisateurShema.find(req.body.email,req.body.password)
    .then(data => {
        res.json({data})
    })
}

module.exports = UserConnected