import express from "express"
import path from "path"
import { fileURLToPath } from "url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

//server
const app = express()
const port = 4000;


app.listen(port, () => {
  console.log(`En el http://localhost:${port}`)
})



//config
app.use(express.static(__dirname+ "/public"))



//rutas
app.get("/",(req,res)=>res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",(req,res)=>res.sendFile(__dirname + "/pages/register.html"));







