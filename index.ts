const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/",authRouter)

app.listen(5000,()=>{
    console.log("Server is running")
})