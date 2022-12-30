import {InjectToken} from "../constant"
import {RegisterService} from "../app/service"
import {JwtHelper} from "../app/helper"

const ProviderConfig = [
   {
      token: InjectToken.RegisterService,
      useClass: RegisterService
   },
   {
      token: InjectToken.JwtHelper,
      useClass: JwtHelper
   }
]

export {ProviderConfig}