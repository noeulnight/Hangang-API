const fetch = require('node-fetch')
const express = require('express')
const cors = require('express')

const app = express()
app.use(cors())

app.get('/', async (req,res) => {
  let _res = await fetch('http://hangang.dkserver.wo.tc/', {mothed: "GET"})
  let json = await _res.json()
  let Data = { statusCode: 200, temp: json.temp, time: json.time }
  res.send(JSON.stringify(Data))
})

app.listen(8006, () => {
  console.log('Server Online')
})