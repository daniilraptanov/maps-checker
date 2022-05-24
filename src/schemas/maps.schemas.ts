const Joi = require("joi");

export const mapsSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string().required()
});
