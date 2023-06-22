const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')

const chefData = require('./Data/chefData.json')


app.use(cors())

app.get('/',(req,res)=>{
    res.send('food server is runing now')
})



app.get("/chefData",(req,res)=>{
 res.send(chefData)
})
app.get("/singleChef/:id" , (req,res)=>{
    const id = req.params.id
    console.log(id)
    const singleItem = chefData.find(data => data.id == id)
    res.send(singleItem)
    
    
})



app.listen(port, () => {
    console.log(`Food server port is ${port}`)
  })