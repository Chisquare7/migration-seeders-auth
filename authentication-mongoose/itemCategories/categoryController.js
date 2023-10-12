const categoryModel = require("../models/categoryModel");
require("dotenv").config();


const createCategory = async (req, res) => {
    const categoryInfo = req.body

    const newCategory = await categoryModel.create({
        name: categoryInfo.name,
        description: categoryInfo.description,
        category_image: categoryInfo.category_image,
    })

    res.status(200).json({
        message: "Item category was created successfully",
        newCategory
    })
}

module.exports = { createCategory };
