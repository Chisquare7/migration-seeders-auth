const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const adminModel = require("../models/adminModel")



const requireAdminAuth = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization

        if (!bearerToken) {
            return res.status(401).json({
                message: "Authentication with token required. Enter your bearer token"
            })
        }

        const token = bearerToken.split(" ")[1]

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        const admin = await adminModel.findOne({
            email: decoded.email
        })

        if (!admin) {
            return res.status(403).json({
                message: "Unauthorized. Admin access required"
            })
        }

        req.admin = admin
        next()
    } catch (error) {
        return res.status(403).json({
            message: "You are not authorized. Invalid token",
            error: error.message
        })
    }
};


const requireAuthenticate = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization

        if (!bearerToken) {
            return res.status(401).json({
                message: "Authentication with token required. Enter your bearer token"
            })
        }

        const token = bearerToken.split(" ")[1]

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        const foundUser = await userModel.findOne({ email: decoded.email })
        
        if (!foundUser) {
            return res.status(401).json({
                message: "Oops! You are not authenticated"
            })
        }

        req.user = foundUser
        next()
    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
}


module.exports = { requireAdminAuth, requireAuthenticate };