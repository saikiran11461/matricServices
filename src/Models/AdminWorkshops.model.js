const mongoose = require('mongoose');


const adminWorkShopsSchema = new mongoose.Schema({
    topic:{type:String, required:true},
    desc:{type:String, required:true},
    venue:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:Number, required:true},
    criteria:[{type:String, required:true}],
    contact:{type:Number, required:true},
    email:{type:String, required:true},
    img:[{type:String, required:false}],
},{
    timestamps:true,
    versionKey:false
})

const adminWorkshopsModel = mongoose.model("adminWorkshop", adminWorkShopsSchema)

module.exports = adminWorkshopsModel; 