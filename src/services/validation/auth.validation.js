
import Joi from "joi"

const user_regex = Joi.object({
  name: Joi.string().min(4).max(16).required(),
  nickname: Joi.string().min(4).max(16).required(),
  cel: Joi.string().min(10).max(15).required(),
  password: Joi.string().min(6).max(256).required(),
  confirm_password: Joi.ref('password'),
  email: Joi.string().min(6).max(56).email({tlds: {allow: false}})
})


export default user_regex