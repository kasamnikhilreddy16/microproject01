const express=require('express')
const router=express.Router()
const ventilator=require("../models/ventilator")
let middleware = require('../middleware')
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.json())
//getting request from server
router.get('/',middleware.checkToken,async function(req,res)
{
    try{
        const ventilatordet=await ventilator.find()
        res.json(ventilatordet)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})
//getting a paticular data through id
router.get('/:id',middleware.checkToken,async function(req,res)
{
    try{
        const ventilatordetl=await ventilator.findById(req.params.id)
        res.json(ventilatordetl)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})
//getting ventilator details using status
router.post('/searchbystatus',middleware.checkToken,async function(req,res){
      const venstatus=req.body.status
      var venstatusdel=await ventilator.find({status: req.body.status})
      res.json(venstatusdel)
    
})

//getting ventilator details using hospitalname

router.post('/searchventbyhospname',middleware.checkToken,async function(req,res){
    const hosname=req.body.name
    var vendet=await ventilator.find({name: req.body.name})
    res.json(vendet)
})
//posting data 
router.post('/',middleware.checkToken,async function(req,res)
{
    const ventilators=new ventilator({
        Hid:req.body.Hid,
        ventilatorid:req.body.ventilatorid,
        status:req.body.status,
        name:req.body.name

    })
    try{
        const a2=await ventilators.save()
        res.json(a2)

    }
    catch(err){
        res.send('Error'+err)

    }
})

//deleting data
router.delete('/:id',middleware.checkToken,async function(req,res)
{
    try{
        const ventilatordet=await ventilator.remove({_id: req.params.id})
        res.json(ventilatordet)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

//updating data

router.patch('/:id',middleware.checkToken,async function(req,res)
{
    try{
        const ventilatordetl=await ventilator.updateMany({_id: req.params.id},{$set: {Hid: req.body.Hid,ventilatorid: req.body.ventilatorid,status: req.body.status,name: req.body.name}})
        res.json(ventilatordetl)
    }
    catch(err)
    {
        res.send("Error"+err)
    }

})

module.exports=router