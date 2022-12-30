import {IJwtHelper} from "./IJwtHelper"
import {sign, SignOptions} from "jsonwebtoken"
import {Env} from "../../../constant"

class JwtHelper implements IJwtHelper
{
   encode(data: any, options?: SignOptions): string
   {
      return sign({data: JSON.stringify(data)}, Env.jwtSecret, options)
   }
}

export {JwtHelper}