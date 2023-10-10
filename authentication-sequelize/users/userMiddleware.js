const joi = require("joi");
const userModel = require("../models/user")

const userValidation = (req, res, next) => {
	try {
		const userSchema = joi.object({
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
			phone_number: joi.string().empty().required().messages({
				"string.base": `"phone_number" must be a "text"`,
				"string.empty": `"phone_number" can not be empty`,
				"string.required": `"phone_number" is required`,
			}),
			gender: joi.string().empty().valid("male", "female"),
		});

		userSchema.validateAsync(req.body, { abortEarly: true });

		next();
	} catch (error) {
		res.status(422).json({
            message: "Invalid information provided",
            error: error.message
		});
	}
};


const loginInfoValidation = async (req, res, next) => {
    try {
        const userSchema = joi.object({
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
            })
        });
        
        userSchema.validateAsync(req.body, { abortEarly: true });

        next()

        const loginInfo = req.body
        
        const existingUser = await userModel.findOne({ where: { email: loginInfo.email } })
        if (!existingUser) {
            res.status(404).json({
                message:"Oops! You are not found, Please signup"
            })
        }
    } catch (error) {
        res.status(422).json({
            message:"Oops! Invalid information provided"
        })
    }
}

module.exports = { userValidation, loginInfoValidation };
