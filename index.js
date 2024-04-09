require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Login', (req, res) => {
    res.send("Login Page is Here")
})

app.get('/Product',(req,res) =>{
    res.send("<important>Product Page is Here</important>")
})

app.get('/Tags',(req,res) =>{
    res.send("<h1>Product Page is Here</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})