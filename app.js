const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:9000/Ventilators'
const app = express()

const bodyparser=require('body-parser')
let jwt=require('jsonwebtoken')
let server =require('./sever')

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected!')
})
app.use(express.json())

const hosRouter=require('./routers/hospital')
app.use("/hospital",hosRouter)

const venRouter=require('./routers/ventilator')
app.use('/ventilator',venRouter)


const
app.listen(9000 , () => {
    console.log('server started')
})
 