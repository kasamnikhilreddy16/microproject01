const  mongoose  = require("mongoose");

const hospitalschema=new mongoose.Schema({
    Hid:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        requried:true
    },
    location:
    {
        type:String,
        requried:true
    },
    address:
    {
        type:String,
        requried:true
    },
    contactno:
    {
        type:String,
        requried:true
    }
})

module.exports=mongoose.model('hospital',hospitalschema)