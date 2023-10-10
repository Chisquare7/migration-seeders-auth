const joi = require("joi")


const validateItemSupplier = (req, res, next) => {
    try {
        const supplierSchema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `"name" must be a "text"`,
                "string.empty": `"name" can not be empty`,
                "string.required": `"name" is required`,
            }),
            address: joi.string().empty().required().messages({
                "string.base": `"address" must be a "text"`,
                "string.empty": `"address" can not be empty`,
                "string.required": `"address" is required`,
            }),
            contact_info: joi.string().empty().required().messages({
                "string.base": `"contact_info" must be a "text"`,
                "string.empty": `"contact_info" can not be empty`,
                "string.required": `"contact_info" is required`,
            }),
            supplier_website: joi.string().empty().required().messages({
                "string.base": `"supplier_website" must be a "text"`,
                "string.empty": `"supplier_website" can not be empty`,
                "string.required": `"supplier_website" is required`,
            }),
            terms_and_conditions: joi.string().empty().required().messages({
                "string.base": `"terms_and_conditions" must be a "text"`,
                "string.empty": `"terms_and_conditions" can not be empty`,
                "string.required": `"terms_and_conditions" is required`,
            }),
        });

        supplierSchema.validateAsync(req.body, { abortEarly: true });
        
        next()
    } catch (error) {
        res.status(422).json({
            message: "Invalid information provided",
            error: error.message
        })
    }
};

module.exports = { validateItemSupplier };