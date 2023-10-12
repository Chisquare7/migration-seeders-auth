const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
require("dotenv").config()


const createUser = async (req, res) => {
    const userDetails = req.body

    try {
        const existingUser = await userModel.findOne({ email: userDetails.email })
    
        if (existingUser) {
            res.status(409).json({
                message: "Oops! User already exist"
            })
        }

        const newUser = await userModel.create({
            name: userDetails.name,
            address: userDetails.address,
            email: userDetails.email,
            password: userDetails.password,
            phone_number: userDetails.phone_number,
            gender: userDetails.gender
        });

        const token = await jwt.sign({_id: newUser._id, email: newUser.email}, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.status(200).json({
            message: "User was created successfully",
            token,
            newUser
        })
    } catch (error) {
        console.error("Error creating user", error)
        res.status(500).json({
            message: "Internal server error. An error occurred while creating the user"
        })
    }
}

const loginUser = async (req, res) => {
    const userLoginDetails = req.body

    try {
        const existingUser = await userModel.findOne({ email: userLoginDetails.email });

        if (!existingUser) {
            return res.status(401).json({
                message: "User authentication failed. User not found."
            })
        }

        const isPasswordValid = await existingUser.isValidPassword(userLoginDetails.password)

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "User authentication failed. Wrong email or password"
            })
        }

        const token = jwt.sign({ _id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" })
        
        res.status(200).json({
            message: "User authentication successful",
            token,
            existingUser
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Oops! Internal server error"
        })
    }
}

module.exports = { createUser, loginUser };