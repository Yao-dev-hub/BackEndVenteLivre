const mongoose = require("mongoose")
const LivreShema = require("../../SchemaMongoose/LivreShema")


const GetLivres = async (res) => {
    LivreShema.find().then(data => {
        res.json({message:"ok",data:data})
    })
}

module.exports = GetLivres