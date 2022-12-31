import {User} from "../../model"

interface IRegisterService
{
   signUpWithEmail(registerUser: User): Promise<string>
}

export {IRegisterService}