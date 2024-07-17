const Joi = require('joi');
const userSchema = Joi.object().keys({
    fullname:Joi.string().max(50),
    username:Joi.string().max(25),
    email:Joi.string()
});


