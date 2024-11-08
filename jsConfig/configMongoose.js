const mongoose = require("mongoose")

const DBconnect = async (serveur) =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2",{
        dbName:"toDoList"
    }).then(()=>{
        serveur.listen(5500,()=> console.log("Serveur demanrré avec succès sur le port 5500"))
    }).catch((error) => {
        console.log(error)
    })

}


module.exports = DBconnect
