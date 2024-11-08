const mongoose = require("mongoose")
const LivreShema = require("../../SchemaMongoose/LivreShema")


const GetLivresByID = async (res,id) => {
    LivreShema.findById(id).then(data => {
        res.json({message:"ok",data:data})
    })
}

module.exports =  GetLivresByID