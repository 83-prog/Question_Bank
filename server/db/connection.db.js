// let express = require("express");
// let router = express.Router();
let mongoose = require("mongoose");


// mongoose kya kam krta hai mongo db se connectvite krwata hai //
// use uske features use krne deta  hai //


const connectWithMongoose = async () =>{
    try {
   const connectionInstance =  await mongoose.connect('mongodb+srv://sudhakarverma059_db_user:dewQTncOZhHj2ieM@mydb.fcdzkoe.mongodb.net/?retryWrites=true&w=majority&appName=MyDB') // mongodb ka url hai //
   console.log("connection connect sussfully ", connectionInstance.connection.host)    
    } catch (error) {
      console.log(error);       
    }
}



module.exports={connectWithMongoose}
