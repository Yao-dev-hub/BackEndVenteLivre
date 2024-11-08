const mongoose = require("mongoose")
const AchatShema = require("../../SchemaMongoose/AchatShema")

const AchatLivre = async (req,res) => {
    let achat = new AchatShema(red.body)
    await achat.save()
    res.json(achat)
}

module.exports = AchatLivre