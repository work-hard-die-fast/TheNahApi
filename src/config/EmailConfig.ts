import {Env} from "../constant"
import nodemailer from "nodemailer"

const EmailConfig = nodemailer.createTransport({
   host: Env.emailHost, // "smtp.ethereal.email"
   port: Env.emailPort, // 587
   secure: false, // true for 465, false for other ports
   auth: {
      user: Env.emailUser, // generated ethereal user
      pass: Env.emailPassword, // generated ethereal password
   }
})

export {EmailConfig}