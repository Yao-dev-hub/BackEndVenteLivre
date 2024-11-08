const mongoose = require("mongoose")
const LivreShema = require("../../SchemaMongoose/LivreShema")


const AddLivres = async (req,res) => {
    const livre = new LivreShema(req.body)
    await livre.save()
    res.json(livre)
}

module.exports =  AddLivres