import express from "express"
import path from "path"
import { fileURLToPath } from "url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 4000;




app.listen(port, () => {
  console.log(`En el http://localhost:${port}`)
})

app.get("/",(req,res)=>res.sendFile(__dirname + "/pages/login.html"));
