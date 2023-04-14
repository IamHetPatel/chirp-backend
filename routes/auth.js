const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    res.send("authpage")
})

module.exports = router;