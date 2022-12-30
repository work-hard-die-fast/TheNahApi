import {IRegisterService} from "./IRegisterService"
import {inject, injectable} from "tsyringe"
import {InjectToken} from "../../../constant"
import {IJwtHelper, JwtHelper} from "../../helper"

@injectable()
class RegisterService implements IRegisterService
{
   private readonly jwtHelper: IJwtHelper
   
   constructor(
      @inject(InjectToken.JwtHelper) jwtHelper: JwtHelper
   ) {
      this.jwtHelper = jwtHelper
   }
}

export {RegisterService}