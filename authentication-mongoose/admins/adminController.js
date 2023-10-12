const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel")
require("dotenv").config()


const createAdmin = async (req, res) => {
    const adminInfo = req.body

    const newAdmin = await adminModel.create({
        name: adminInfo.name,
        email: adminInfo.email,
        password: adminInfo.password,
        role: adminInfo.role,
        user_id: adminInfo.user_id,
    })

    const token = await jwt.sign({ _id: newAdmin._id, email: newAdmin.email }, process.env.JWT_SECRET, {expiresIn: "1h"})
    
    res.status(200).json({
        message: "Admin was generated successfully",
        token,
        newAdmin
    })
}

module.exports = { createAdmin };