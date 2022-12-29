import {IRegisterService} from "./IRegisterService"
import {injectable} from "tsyringe"

@injectable()
class RegisterService implements IRegisterService
{
   constructor() {}
}

export {RegisterService}