const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
require("dotenv").config()

const userCreation = async (req, res) => {
    const userDetails = req.body

    existingUser = await userModel.findOne({ where: { email: userDetails.email } })
    
    if (existingUser) {
        res.status(409).json({
            message: "User already existed"
        })
    }

    const newUser = await userModel.create({
        name: userDetails.name,
        address: userDetails.address,
        email: userDetails.email,
        password: userDetails.password,
        phone_number: userDetails.phone_number,
        gender: userDetails.gender
    })

    const token = await jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET)
    
    res.status(201).json({
        message: "Creation of user successful",
        token,
        newUser
    })
}


const login = async (req, res) => {
    const userLoginInfo = req.body

    const existingUser = await userModel.findOne({ where: { email: userLoginInfo.email } })
    if (!existingUser) {
        return res.status(404).json({
            message: "Oops! You are not found, Please signup"
        })
    }

    const validPassword = await existingUser.validPassword(userLoginInfo.password)
    if (!validPassword) {
        return res.status(422).json({
            message:"Oops! Incorrect email or password provided"
        })
    }

    const token = await jwt.sign({ email: existingUser.email, _id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    
    return res.status(200).json({
        message: "Login successful",
        token,
        existingUser
    })
}


module.exports = { userCreation, login };