const joi = require("joi")

const validateItemCategory = (req, res, next) => {
    try {
        const categorySchema = joi.object({
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
            category_image: joi.string().empty().required().messages({
                "string.base": `"category_image" must be a "text"`,
                "string.empty": `"category_image" can not be empty`,
                "string.required": `"category_image" is required`,
            }),
        });

        categorySchema.validateAsync(req.body, { abortEarly: true });

        next()
    } catch (error) {
        res.status(422).json({
            message: "Invalid information provided",
            error: error.message
        })
    }
};

module.exports = { validateItemCategory };