import express, {Application} from "express"
import * as http from "http"
import {MariadbConnection} from "../config"

class Server
{
   private readonly serverPort: number
   private readonly app: Application
   private readonly httpServer: http.Server

   constructor()
   {
      this.app = express()
      this.serverPort = 3000
      this.httpServer = http.createServer(this.app)
   }
   private async connectDatabase(): Promise<void>
   {
      await MariadbConnection.initialize()
         .then(() => {
            console.log("--- connect mariadb successfully")
         })
         .catch((error) => {
            console.log("--- mariadb is dump")
            console.error(error)
            console.log("------------------------")
         })
   }
}

export {Server}