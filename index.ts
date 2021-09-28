const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth")
const dropItemsRouter = require("./routes/dropItems")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/auth",authRouter)
app.use("/items",dropItemsRouter)

app.listen(5000,()=>{
    console.log("Server is running")
})