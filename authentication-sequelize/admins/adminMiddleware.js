const joi = require("joi")


const validateAdmin = (req, res, next) => {
    try {
        const adminSchema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `"name" must be a "text"`,
                "string.empty": `"name" can not be empty`,
                "string.required": `"name" is required`,
            }),
            email: joi.string().empty().email().required().messages({
                "string.base": `"email" must be a "text"`,
                "string.empty": `"email" can not be empty`,
                "string.required": `"email" is required`,
            }),
            password: joi.string().empty().required().min(6).messages({
				"string.base": `"password" must be a "text"`,
				"string.empty": `"password" can not be empty`,
				"string.required": `"password" is required`,
				"string.min": `"password" should have a minimum length of {6}`,
			}),
            role: joi.string().empty().valid("user_admin", "management_admin"),
            user_id: joi.string().empty().required().messages({
                "string.base": `"user_id" must be a "text"`,
                "string.empty": `"user_id" can not be empty`,
                "string.required": `"user_id" is required`,
            }),
        });
        
        adminSchema.validateAsync(req.body, { abortEarly: true });

        next();

    } catch (error) {
        res.status(422).json({
            message: "Invalid information provided",
            error: error.message
        });
    }
};

module.exports = { validateAdmin };