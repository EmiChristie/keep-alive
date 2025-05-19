const express = require('express')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 8081

const app = express()
app.use(cors())
app.use(express.json({limit : "5mb"}))

app.get("/", async (req,res) => {
    //const data = await imageModel.find({})
    res.json({message : "Server running", data: res.statusCode})
})


app.listen(PORT, ()=>console.log("Server is running at "+PORT))

const url = process.env.RENDER_URL
const url_back = process.env.BACKEND_URL
const interval = 10000;


//Reloader Function
async function reloadWebsite() {
  const res = await fetch(`${url}`, {
    method:"GET",
    headers: {
        "content-type" : "application/json"
    }
  })

  const res_back = await fetch(`${url_back}/teste/conexao`, {
    method:"GET",
    headers: {
      "ngrok-skip-browser-warning": "any",
    }
  })
  console.log(res)
  console.log(res_back)
}

setInterval(reloadWebsite, interval);