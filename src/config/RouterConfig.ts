import {RegisterController} from "../app/controller"
import {BaseController} from "../@base"

const RouterConfig: {new(): BaseController}[] = [
   RegisterController
]

export {RouterConfig}