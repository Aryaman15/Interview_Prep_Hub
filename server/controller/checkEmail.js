const UserModel = require("../models/UserModel")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config(); //load the configuration
async function checkEmail(req,res){
    try {
        const { email,password } = req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"ALL FIELDS ARE REQUIRED, PLEASE TRY AGAIN",
            })
        }
        const checkEmail = await UserModel.findOne({email}).select("-password")
        if(!checkEmail){
            return res.status(400).json({
                message : "user not exit",
                error : true
            })
        }
        const user=await UserModel.findOne({email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered, please signup first",
            })
        }
        if(await bcrypt.compare(password,user.password)){
            //create the tocken using sign method
            const payload={
                name:user.name,
                email:user.email,
                id:user._id,
            }
            //create jwt tocken using sign
            const token=jwt.sign(payload,process.env.JWT_SECREAT_KEY,{
                expiresIn:"2h",
            });
            user.token=token;
            user.password=undefined;

            //create cookie and response send 
            const options={
                expires: new Date(Date.now() + 3*34+60*60*1000), //this mean 3days after 3 cays cookies will get destroyed
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in succesfully",
            })
            console.log("logged in successfully");
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect",
            })
        }

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkEmail