const Joi = require("joi");

export const chipSchema = Joi.object({
    id: Joi.string().allow(""),
    name: Joi.string().required(),
    level: Joi.number().required(),
    isComplete: Joi.boolean().required(),
    mapId: Joi.string()
});
