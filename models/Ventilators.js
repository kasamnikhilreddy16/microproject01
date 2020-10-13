const mongoose=require("mongoose");

const ventilatorschema=new mongoose.Schema({
    Hid:
    {
        type:String,
        required:true
    },
    ventilatorid:
    {
        type:String,
        required:true
    },
    status:
    {
        type:String,
        requried:true
    },
    name:
    {
        type:String,
        requried:true
    }

})

module.exports=mongoose.model('ventilator',ventilatorschema)