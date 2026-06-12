const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image : String,
    caption : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
})

const postModel = mongoose.model("Post", postSchema)
module.exports = postModel