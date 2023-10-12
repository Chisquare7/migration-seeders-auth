const supplierModel = require("../models/supplierModel")
require("dotenv").config();


const createSupplier = async (req, res) => {
    const supplierDetails = req.body

    const newSupplier = await supplierModel.create({
        name: supplierDetails.name,
        address: supplierDetails.address,
        contact_info: supplierDetails.contact_info,
        supplier_website: supplierDetails.supplier_website,
        terms_and_conditions: supplierDetails.terms_and_conditions,
    })

    res.status(200).json({
        message: "Item supplier was created successfully",
        newSupplier
    })
}

module.exports = { createSupplier };