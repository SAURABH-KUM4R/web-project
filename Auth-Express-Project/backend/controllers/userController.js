const emailValidator = require('email-validator');
const userModel = require('../models/userSchema');
const bcrypt = require('bcrypt');

const signup = async (req,res) => {
    try {
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            sucess:true,
            message: "User created Sucessfully"
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                sucess:false,
                message: 'Email id already exist try forgot password!!'
            })
        }
        return res.status(400).json({
            sucess: false,
            message: error.message
        })
    }
}

const signin = async(req,res) => {
    const {username,password} = req.body;
    try {
        const user = await userModel.findOne({
            username
        })
        .select('+password');

        if(!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                sucess: false,
                message: "Invalid Credential"
            })
        }else{
            const token = await user.JWTtoken();
            user.password = undefined;
            const cookieOption = {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                
            };
            res.cookie("token", token, cookieOption);
            return res.status(200).json({
                sucess:true,
                message: "Login sucessfully",
                // data: user,
                // token: token
            })
        }
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: error.message
        })
    }
}

const getUser = async (req,res) => {
    const userId = req.user.id;
    try {
        const user =  await userModel.findById(userId);
        return res.status(200).json({
            sucess: true,
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            data: error.message
        })
    }
}
module.exports = {
    signup,
    signin,
    getUser
}