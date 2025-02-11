const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name : { type: String, required : true},
        birthYear : Number , 

    },
    {timestamps: true});

module.exports = mongoose.model('Author' , authorSchema);