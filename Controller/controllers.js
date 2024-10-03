
const expenses = require("./models/model")

exports.getController = (req,res,next)=>{

    expenses.findAll().then((result)=>{
           res.json(result)
   }).catch(err =>  console.log(err))
}

exports.postContoller = (req,res,next)=>{
    const data = req.body
    expenses.create(data).then(()=> res.sendStatus(200)).catch(err => console.log(err))
    
 }

 exports.deleteController = (req,res,next)=>{
    const userID = req.params.id
    expenses.destroy({where:{id  :userID }}).then(() => res.sendStatus(200)).catch(err => console.log(err))
 }

 exports.editController = (req,res,next)=>{
    const userID =  req.params.id
    const data =  req.body
    expenses.findByPK(userID).then(result =>{
      result.price = data.price
      result.description = data.description
      result.categories = data.categories
      result.save()
      return res.sendStatus(201)
    }).catch(err=>console.log(err))
 }