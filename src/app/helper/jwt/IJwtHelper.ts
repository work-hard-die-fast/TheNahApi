import {SignOptions} from "jsonwebtoken"

interface IJwtHelper
{
   encode(data: any, options?: SignOptions): string
}

export {IJwtHelper}