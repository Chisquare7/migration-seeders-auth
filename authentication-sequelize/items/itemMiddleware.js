const joi = require("joi")

const validateItem = (req, res, next) => {
    try {
        const itemSchema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `"name" must be a "text"`,
                "string.empty": `"name" can not be empty`,
                "string.required": `"name" is required`,
            }),
            description: joi.string().empty().required().messages({
                "string.base": `"description" must be a "text"`,
                "string.empty": `"description" can not be empty`,
                "string.required": `"description" is required`,
            }),
            price: joi.string().empty().required().messages({
                "string.base": `"price" must be a "text"`,
                "string.empty": `"price" can not be empty`,
                "string.required": `"price" is required`,
            }),
            size: joi.string().empty().valid("small", "medium", "large"),
            quantity_in_stock: joi.string().empty().required().messages({
                "string.base": `"quantity_in_stock" must be a "text"`,
                "string.empty": `"quantity_in_stock" can not be empty`,
                "string.required": `"quantity_in_stock" is required`,
            }),
            reorder_level: joi.string().empty().required().messages({
                "string.base": `"reorder_level" must be a "text"`,
                "string.empty": `"reorder_level" can not be empty`,
                "string.required": `"reorder_level" is required`,
            }),
            item_image: joi.string().empty().required().messages({
                "string.base": `"item_image" must be a "text"`,
                "string.empty": `"item_image" can not be empty`,
                "string.required": `"item_image" is required`,
            }),
            category_id: joi.string().empty().required().messages({
                "string.base": `"category_id" must be a "text"`,
                "string.empty": `"category_id" can not be empty`,
                "string.required": `"category_id" is required`,
            }),
            supplier_id: joi.string().empty().required().messages({
                "string.base": `"supplier_id" must be a "text"`,
                "string.empty": `"supplier_id" can not be empty`,
                "string.required": `"supplier_id" is required`,
            }),
        });

        itemSchema.validateAsync(req.body, { abortEarly: true });

        next();

    } catch (error) {
        res.status(422).json({
            message: "Invalid information provided",
            error: error.message
        });
    }
};

module.exports = { validateItem };