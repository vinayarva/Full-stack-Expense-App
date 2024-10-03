const express= require("express")
const Controller =  require("../Controller/controllers")



const route = express.Router()

route.get("/",Controller.getController)

route.post("/",Controller.postContoller)


route.delete("/delete/:id",Controller.deleteController)

route.put("/edit/:id",Controller.editController)


module.exports = route
