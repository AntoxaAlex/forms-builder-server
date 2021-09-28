const {Router} = require("express");
const router = Router()
const items=[]

router.get("/",(req:any,res:any)=>{
    res.json(items)
})
router.post("/",(req:any,res:any)=>{
    const item = req.body
    items.push(item)
    console.log(items)
    res.json(item)
})

module.exports = router