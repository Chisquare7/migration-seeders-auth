const adminModel = require("../models/admin")

const createAdmin = async (req, res) => {
    const adminDetails = req.body

    const newAdmin = await adminModel.create({
        name: adminDetails.name,
        email: adminDetails.email,
        role: adminDetails.role,
        user_id: adminDetails.user_id,
    });

    res.status(200).json({
        message: "Creation of admin successful",
        newAdmin,
    });
}

module.exports = { createAdmin };