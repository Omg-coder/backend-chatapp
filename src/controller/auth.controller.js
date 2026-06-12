const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

async function registerController(req , res) {
    const {username , password} = req.body;

    if(!username || !password){
        return res.status(400).json({
            message : "Username and password are required"
        })
    }

    const isUserExist = await userModel.findOne({username})
    if(isUserExist){
        return res.status(400).json({
            message : "User already exist"
        })
    }
    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10)
    })
    

    const token = jwt.sign({id : user._id}, process.env.JWT_SECRET  )
    res.cookie("token", token)

    res.status(201).json({
        message : "User registered successfully",
        user,
        token
    })

    }

async function loginController(req , res) {
    const {username , password} = req.body;

    const user = await userModel.findOne({
        username,
        password
    })

    if(!user){
        return res.status(400).json({
            message : "User not found"
        })
    }

    if(user.password !== password){
        return res.status(400).json({
            message : "Invalid password"
        })
    }

    const token = jwt.signd({id : user._id}, process.env.JWT_SECRET  )
    res.cookie("token", token)

    res.status(200).json({
        message : "User logged in successfully",
        user,
        token
    })


}


module.exports = {
    registerController,
    loginController
}
