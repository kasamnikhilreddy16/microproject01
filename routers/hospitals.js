const express=require("express")
const app=express()
const router=express.Router()
const hospital=require("../models/hospital")
let middleware = require('../middleware')
const bodyparser=require("body-parser")

app.use(bodyparser.json())
//getting the data
router.get ('/',middleware.checkToken,async function(req,res)
{
    try{
        const hospitaldet=await hospital.find()
        res.json(hospitaldet)
    }
    catch(err)
    {
        res.send("Error"+err)
    }

})
//grtting the  data by using id
router.get ('/:id',async function(req,res)
{
    try{
        const hospitaldetl=await hospital.findById(req.params.id)
        res.json(hospitaldetl)
    }
    catch(err)
    {
        res.send("Error"+err)
    }

})

//searching hospital by  using hospital name
router.post('/hospitalname',async function(req,res){
    const name=req.body.name
    const hosname=await hospital.find({name: req.body.name})
    res.json(hosname)
})
//posting data
router.post('/',async function(req,res)
{
    const hospitals=new hospital({
        Hid:req.body.Hid,
        name:req.body.name,
        location:req.body.location,
        address:req.body.address,
        contactno:req.body.contactno

    })
    try{
        const a1=await hospitals.save()
        res.json(a1)

    }
    catch(err){
        res.send('Error'+err)

    }
})
//deleting the data

router.delete('/:id',async function(req,res)
{
    try{
        const hospitaldetl=await hospital.remove({_id: req.params.id})
        res.json(hospitaldetl)
    }
    catch(err)
    {
        res.send("Error"+err)
    }

})

//updating  the data
router.patch('/:id',async function(req,res)
{
    try{
        const hospitaldetl=await hospital.updateMany({_id: req.params.id},{$set: {Hid: req.body.Hid,name: req.body.name,location: req.body.location,address: req.body.address,contactno: req.body.contactno}})
        res.json(hospitaldetl)
    }
    catch(err)
    {
        res.send("Error"+err)
    }

})



module.exports=router