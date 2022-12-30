import Joi from "joi"

const SignUpWithEmailRequestBodySchema = Joi
   .object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
   })
   .options({abortEarly: false})

export {SignUpWithEmailRequestBodySchema}