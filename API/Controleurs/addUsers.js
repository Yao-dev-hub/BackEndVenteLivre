const mongoose = require("mongoose")
const UtilisateurShema = require("../../SchemaMongoose/UtilisateurShema")

const AddUsers = async (req,res) => {
    let users = new UtilisateurShema(req.body)
    await users.save()
    res.json(users)
}

module.exports = AddUsers