import {IRegisterService} from "./IRegisterService"
import {inject, injectable} from "tsyringe"
import {InjectToken} from "../../../constant"
import {IJwtHelper, JwtHelper} from "../../helper"
import {IUserRepository} from "../../repository";

@injectable()
class RegisterService implements IRegisterService
{
   private readonly userRepo: IUserRepository
   private readonly jwtHelper: IJwtHelper
   
   constructor(
      @inject(InjectToken.UserRepository) userRepo: IUserRepository,
      @inject(InjectToken.JwtHelper) jwtHelper: JwtHelper
   ) {
      this.userRepo = userRepo
      this.jwtHelper = jwtHelper
   }
}

export {RegisterService}