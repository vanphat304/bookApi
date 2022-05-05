const express = require('express')
const authRouter = express.Router();
const {checkConnection} = require('../../middleware/connectSQL/index')
const {querySelect} = require('../../SQL/query')

authRouter.post('/login',async (req,res)=>{
    try {

        let {userName , password , server} = req.body;
        const login = await (checkConnection(userName,password,server))
        res.status(200).send("connect successfullyyy")
        console.log("login",login)
    } catch (error) {
        res.status(201).send(error.message) 
        // throw new error.message
    }
})

module.exports = {
    authRouter
}