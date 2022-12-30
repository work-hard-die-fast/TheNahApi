import {InjectToken} from "../constant"
import {RegisterService} from "../app/service"
import {JwtHelper} from "../app/helper"
import {UserRepository} from "../app/repository"

const ProviderConfig = [
   // service
   {
      token: InjectToken.RegisterService,
      useClass: RegisterService
   },

   // repository
   {
      token: InjectToken.UserRepository,
      useClass: UserRepository
   },

   // helper
   {
      token: InjectToken.JwtHelper,
      useClass: JwtHelper
   }
]

export {ProviderConfig}