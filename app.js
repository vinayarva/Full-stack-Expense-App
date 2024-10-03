const express = require("express")
const bodyParser = require("body-parser")
const cors =  require("cors")

const  sequelize = require("./models/model")

const route = require("./Route/route")



const app = express()

app.use(cors())

app.use(bodyParser.json())


app.use(route)



sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running on http://localhost:3000/")
    })
}).catch((err)=> console.log(err))

