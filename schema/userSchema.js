const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().trim().min(2).required().messages({
    "any.required": "Name is required",
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
  }),
  email: Joi.string().trim().lowercase().email().required().messages({
    "any.required": "Email is required",
    "string.empty": "Email is required",
    "string.email": "Email must be valid",
  }),
  age: Joi.number().integer().min(1).max(120).required().messages({
    "any.required": "Age is required",
    "number.base": "Age must be a number",
    "number.integer": "Age must be a whole number",
    "number.min": "Age must be at least 1",
    "number.max": "Age must be at most 120",
  }),
  course: Joi.string().trim().min(2).required().messages({
    "any.required": "Course is required",
    "string.empty": "Course is required",
    "string.min": "Course must be at least 2 characters",
  }),
}).options({ abortEarly: false, allowUnknown: false });

module.exports = userSchema;