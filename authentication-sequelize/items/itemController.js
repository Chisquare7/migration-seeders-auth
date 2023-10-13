const itemModel = require("../models/item")

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
        supplier_id: itemDetails.supplier_id
    });

    res.status(200).json({
        message: "Creation of item successful",
        newItem,
    });
}


const getItems = async (req, res) => {
    try {
        const items = await itemModel.findAll();

        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while fetching items"
        })
    }
}

module.exports = { createItem, getItems };