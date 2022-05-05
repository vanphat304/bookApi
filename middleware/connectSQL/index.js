const sql = require('mssql')
const configServer00  = { 
    server : "DESKTOP-OJA9HMP\\MSSQLSERVER00",
    port : 1433,
    database:"BOOKSTORE"
}
const configServer01  = { 
    server : "DESKTOP-OJA9HMP\\MSSQLSERVER01",
    port : 1434,
    database:"BOOKSTORE"
}
const configServer02  = { 
    server : "DESKTOP-OJA9HMP\\MSSQLSERVER02",
    port : 1435,
    database:"BOOKSTORE2"
}

const config = (user,password,checkServer)=> {
    let configServer 
    switch (checkServer) {
        case '0':
           configServer = configServer00 ;
            break;
        case '1' :
            configServer = configServer01;
            break;
        case '2': 
            configServer = configServer02;

            break;
        default:
            break;
    }
    return {
        user,
        password,
        server : configServer.server,
        database:configServer.database,
        port: configServer.port,
        options: {
            enableArithAbort: true,
            trustServerCertificate: true,
            encrypt: false
    
        }
}
}

const connectSQL = async (query , userName , password , check) => {
    try {
        const connect =  await sql.connect(config(userName,password,check))
        let resultSql = await sql.query(query)
        await connect.close();
        return resultSql;

    } catch (error) {
        throw error
    }
}

const checkConnection = async ( userName , password , check) => {
    try {
        const connect =  await sql.connect(config(userName,password,check))
        console.log("data connected")
        await connect.close();
        return true

    } catch (error) {
        throw error
    }
}

const configAcess = (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}





module.exports = { connectSQL ,checkConnection , configAcess}