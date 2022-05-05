const express = require('express');
const { authRouter } = require('../auth');
const rootRouter = express.Router();
const {bookRouters} = require('../bookRouter')

rootRouter.use("/book",bookRouters)
rootRouter.use("/auth",authRouter)

module.exports={
    rootRouter
}