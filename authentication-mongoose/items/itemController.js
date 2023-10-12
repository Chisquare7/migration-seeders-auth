const itemModel = require("../models/itemModel")


const createItem = async (req, res) => {
    const itemDetails = req.body

    const newItem = await itemModel.create({
        name: itemDetails.name,
        description: itemDetails.description,
        price: itemDetails.price,
        size: itemDetails.size,
        quantity_in_stock: itemDetails.quantity_in_stock,
        reorder_level: itemDetails.reorder_level,
        item_image: itemDetails.item_image,
        category_id: itemDetails.category_id,
        supplier_id: itemDetails.supplier_id,
    })

    res.status(200).json({
        message: "Item was created successfully",
        newItem
    })
}


const getItems = async (req, res) => {
    try {
        const items = await itemModel.find();

        res.status(200).json({
            message: "Items retrieved successfully",
            items
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Error while retrieving items",
            error: error.message,
        })
    }
}

module.exports = { createItem, getItems };