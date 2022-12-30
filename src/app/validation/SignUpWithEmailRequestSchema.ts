import Joi from "joi"

const SignUpWithEmailRequestSchema = Joi
   .object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
   })
   .options({abortEarly: false})

export {SignUpWithEmailRequestSchema}