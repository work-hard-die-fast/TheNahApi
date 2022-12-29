import {BaseController} from "../../@base"
import {Request, Response, Router} from "express"
import {inject, injectable} from "tsyringe"
import {InjectToken} from "../../constant"
import {IRegisterService} from "../service"

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

   protected readonly router: Router

   protected configureRouter()
   {
      this.router.get("/test", this.test)
   }

   private test = (req: Request, res: Response): Response<string> =>
   {
      return res.send("yeah bitch?")
   }
}

export {RegisterController}