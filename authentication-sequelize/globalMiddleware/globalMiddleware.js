const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
const adminModel = require("../models/admin")


const requireAdminAuth = async (req, res, next) => {
    try {
        const email = res.locals.user.email
        
        const admin = await adminModel.findOne({
            email: email
        })
        console.log("Admin User:", admin);

        if (!admin) {
            return res.status(403).json({
                message: "Unauthorized. Admin access required"
            })
        }

        if (admin.role !== "management_admin") {
            return res.status(403).json({
                message: "Unauthorized. Admin access required",
                error: "Admin does not have the correct role."
            });
        }

        next();
    } catch (error) {
        console.error("Authentication Error:", error);
        return res.status(403).json({
            message: "You are not authorized. Invalid token",
            error: error.message
        })
    }
}


const requireAuthenticate = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
            return res.status(401).json({
                message: "Authentication required. Token required"
            })
        }

        const token = bearerToken.split(" ")[1]

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        res.locals.user = decoded

        const foundUser = await userModel.findOne({ email: decoded.email })
        
        if (!foundUser) {
            return res.status(401).json({
                message: "You are not authenticated"
            })
        }

        next()
    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
}


module.exports = { requireAdminAuth, requireAuthenticate };