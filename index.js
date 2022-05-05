const express = require('express')
const {connectSQL} = require('./middleware/connectSQL/index')
const {rootRouter} =require('./routers/rootRouter/index')
const {configAcess} =require("./middleware/connectSQL")
const bodyParser = require('body-parser')
const app = express()
const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.urlencoded({extended: true,}));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type','application/json')

    // Pass to next layer of middleware
    next();
});

app.use('/api/bookstore',rootRouter)
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

