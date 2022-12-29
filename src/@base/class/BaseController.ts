import {Router} from "express"

abstract class BaseController
{
   protected readonly router: Router

   protected constructor()
   {
      this.router = Router()
   }

   protected abstract configureRouter(): void

   getRouter(): Router
   {
      this.configureRouter()
      return this.router
   }
}

export {BaseController}