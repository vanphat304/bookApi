const express = require('express')
const {connectSQL} = require('../../middleware/connectSQL/index')
const {querySelect,queryUpdate ,queryInsert,queryDelete} = require("../../SQL/query")
const bookRouters = express.Router();




bookRouters.post('/insert', async (req,res)=>{
    let { userName , password ,server , data } = req.body ;
    let {maDauSach,nhaxb,namxb,soluongton,dongiaban} = data
    console.log("reqbody",req.body)
    console.log("data",data)
    try {
        console.log("queyinser", queryInsert(maDauSach,nhaxb,namxb,soluongton,dongiaban))
        let response = await connectSQL(
            queryInsert(maDauSach,nhaxb,namxb,soluongton,dongiaban),
            userName,password,server)
            console.log("response",response)
            res.json("post successfully")
    } catch (error) {
        res.status(201).json(error.message)
        // throw error.message
    }
})

bookRouters.post('/update' , async (req,res)=>{
    let { userName , password ,server , data } = req.body ;
    let {maDauSach,nhaxb,namxb,soluongton,dongiaban,MaSach} = data

    console.log("data update back",req.body)
    try {
        let response = await connectSQL(
            queryUpdate(nhaxb,maDauSach,namxb,soluongton,dongiaban,MaSach),
            userName,password,server)
            console.log("response",response)
            res.json("update successfully")
    } catch (error) {
        res.status(201).json(error.message)
        // throw error.message
    }

})

bookRouters.post('/delete',async (req,res)=>{
    let { userName , password ,server , id } = req.body ;
    console.log("req",req.body)
    try {
        let response = await connectSQL(
            queryDelete(id),
            userName,password,server)
            res.json("update successfully")
    } catch (error) {
        res.status(201).send(error.message)
        // throw error.message
    }
})

bookRouters.post('/', async (req,res)=>{

    let {userName,password,server} = req.body

    try {
        let response = (await connectSQL(querySelect(),userName,password,server)).recordset
        res.status(200).json(response)
    } catch (error) {
         res.status(201).json(error.message)
        // console.log("errrrrrr",error.message)
        // throw error.message
    }
}
)

module.exports={
    bookRouters
}