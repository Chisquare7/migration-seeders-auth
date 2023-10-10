const supplierModel = require("../models/supplier")

const createItemSupplier = async (req, res) => {
    const supplierDetails = req.body

    const newSupplier = await supplierModel.create({
        name: supplierDetails.name,
        address: supplierDetails.address,
        contact_info: supplierDetails.contact_info,
        supplier_website: supplierDetails.supplier_website,
        terms_and_conditions: supplierDetails.terms_and_conditions,
    });

    res.status(200).json({
        message: "Creation of item supplier successful",
        newSupplier,
    });
}

module.exports = { createItemSupplier };