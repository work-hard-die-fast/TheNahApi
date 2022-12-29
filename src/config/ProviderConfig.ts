import {InjectToken} from "../constant"
import {RegisterService} from "../app/service"

const ProviderConfig = [
   {
      token: InjectToken.RegisterService,
      useClass: RegisterService
   }
]

export {ProviderConfig}