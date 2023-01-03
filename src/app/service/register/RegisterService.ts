import {IRegisterService} from "./IRegisterService"
import {inject, injectable} from "tsyringe"
import {InjectToken} from "../../../constant"
import {IJwtHelper} from "../../helper"
import {IUserRepository} from "../../repository"
import {User} from "../../model"
import {EmailConfig} from "../../../config"

@injectable()
class RegisterService implements IRegisterService
{
   private readonly userRepo: IUserRepository
   private readonly jwtHelper: IJwtHelper
   
   constructor(
      @inject(InjectToken.UserRepository) userRepo: IUserRepository,
      @inject(InjectToken.JwtHelper) jwtHelper: IJwtHelper
   ) {
      this.userRepo = userRepo
      this.jwtHelper = jwtHelper
   }

   async signUpWithEmail(registerUser: User): Promise<string>
   {
      return Promise.resolve("")
   }
}

export {RegisterService}