const mongoose = require('mongoose')

async function connectDB(){
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("connected to database");
   } catch (error) {
    console.log("error connecting to database", error);
   }
}

module.exports = connectDB