import {BaseController} from "../../@base"
import {Request, Response, Router} from "express"

class RegisterController extends BaseController
{
   constructor()
   {
      super()
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