const {Router} = require("express");
const router = Router();
const users = require("../inMemoryData/users");
const jwt = require("jsonwebtoken");

router.post("/",async (req:any,res:any)=>{
    try{
        const {email,password} = req.body
        const user = users.filter(user=>user.email === email)[0]
        if(!user) throw new Error("User not exist")
        if(user.password !== password) throw new Error("Invalid credentials")
        const payload = {
            user:{
                id: user.email
            }
        }
        const secret = "secret";
        jwt.sign(payload, secret, {expiresIn: 360000}, (err,token)=>{
            if(err) throw err;
            res.json({token});
        })
    }catch (e) {
        throw new Error(e.message)
    }
})


module.exports = router


