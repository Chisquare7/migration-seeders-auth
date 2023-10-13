const adminModel = require("../models/admin")
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
    const adminDetails = req.body

    const newAdmin = await adminModel.create({
        name: adminDetails.name,
        email: adminDetails.email,
        password: adminDetails.password,
        role: adminDetails.role,
        user_id: adminDetails.user_id,
    });

    const token = await jwt.sign({ _id: newAdmin._id, email: newAdmin.email }, process.env.JWT_SECRET, { expiresIn: "1h" })

    res.status(200).json({
        message: "Creation of admin successful",
        token,
        newAdmin,
    });
}

module.exports = { createAdmin };