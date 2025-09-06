let express = require("express");
let mongoose = require("mongoose");
const { connectWithMongoose } = require("./db/connection.db");
let cors = require("cors") 

connectWithMongoose();
let app = express();
app.use(express.json());
app.use(cors({ 
    origin:['http://localhost:5173'],
}));

require("dotenv").config;


app.get('/',(req, res)=>{
 res.send({
    activeStatus:true,
    error:false,
 })
})


// routing ke liye url create krege //
// yai Aak trha hse middle were hai //
const { router } = require("./Router/enquiryRoute");
app.use('/web', router)


app.listen(8000, ()=>{
    console.log("server is running")
})



