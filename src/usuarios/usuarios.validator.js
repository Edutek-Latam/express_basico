const Joi = require('joi')
const {request, response} = require('express')
function validateBody(user){
    const schema = Joi.object({
        primer_nombre:Joi.string().min(3).required(),
        primer_apellido: Joi.string().min(3).required(),
        edad: Joi.number().positive().required()
    })
    const {error, value} = schema.validate(user,{abortEarly: false});
   if(error){
    const errors = error.details.map(detail =>{
        return {
            path:detail.path[0],
            message: detail.message
        }
    });
    return errors
   }

   return true;
}


function userUpdateValidate(req=request, res=response,next){
    const body = req.body;
    const schema = Joi.object({
        primer_nombre:Joi.string().min(3).optional(),
        primer_apellido: Joi.string().min(3).optional(),
        edad: Joi.number().positive().optional()
    })
    const {error, value} = schema.validate(body,{abortEarly: false});
    if(error){
        const errors = getMessage(error);
        res.status(500).send({errors});
        return
    }

    next();

}

function getMessage(error){
    const errors = error.details.map(detail =>{
        return {
            path:detail.path[0],
            message: detail.message
        }
    });

    return errors;
}

function userMiddleware(req=request, res=response,next){
    const body = req.body
    const schema = Joi.object({
        primer_nombre:Joi.string().min(3).required(),
        primer_apellido: Joi.string().min(3).required(),
        edad: Joi.number().positive().required()
    })
    const {error, value} = schema.validate(body,{abortEarly: false});
   if(error){
    const errors = getMessage(error);
    res.status(500).send({errors});
    return
   }
   next();

}

module.exports = {validateBody, userMiddleware, userUpdateValidate }