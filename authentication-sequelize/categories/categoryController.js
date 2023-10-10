const categoryModel = require("../models/category")

const createItemCategory = async (req, res) => {
    const categoryDetails = req.body

    const newCategory = await categoryModel.create({
        name: categoryDetails.name,
        description: categoryDetails.description,
        category_image: categoryDetails.category_image
    })

    res.status(200).json({
        message: "Creation of item category successful",
        newCategory
    })
}

module.exports = { createItemCategory };