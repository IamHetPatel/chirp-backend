const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User")

router.post("/signup",async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(req.body.password,salt);

        const newUser = await new User({
            username: req.body.username,
            email:req.body.email,
            password:hashedPwd
    
        });

        const user= await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
    }
    // await user.save()
    // res.send("working")
})

router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user)
            res.status(404).json("user not found");
        else{
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if(!validPassword){
                res.status(400).json("wrong password entered")
            }
            else{
                res.status(200).json(user)
            }
        }
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;