import {User} from "../../model"

interface IRegisterService
{
   signUpWithEmail(newUser: User): Promise<string>
}

export {IRegisterService}