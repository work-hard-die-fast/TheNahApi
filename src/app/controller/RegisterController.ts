import {BaseController} from "../../@base"
import {Request, Response} from "express"
import {inject, injectable} from "tsyringe"
import {InjectToken} from "../../constant"
import {IRegisterService} from "../service"
import {User} from "../model"

@injectable()
class RegisterController extends BaseController
{
   private readonly registerService: IRegisterService

   constructor(
      @inject(InjectToken.RegisterService) registerService: IRegisterService
   ) {
      super()
      this.registerService = registerService
   }

   protected configureRouter()
   {
      this.router.get("/test", this.test)
      this.router.post("/sign-up-email", this.signUpWithEmail)
   }

   private test = (req: Request, res: Response): Response<string> =>
   {
      return res.send("yeah bitch?")
   }

   private signUpWithEmail = (req: Request, res: Response): Response<any> =>
   {
      const user: User = new User()
      return res.send("signUpWithEmail")
   }
}

export {RegisterController}