import express, {Application, json, urlencoded} from "express"
import * as http from "http"
import {MariadbConnection, ProviderConfig, RouterConfig} from "../config"
import cors from "cors"

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

   async start(callback?: (port: number) => void): Promise<void>
   {
      await this.connectDatabase()
      this.configureProvider()
      this.configureRouter()
      this.configureApp()

      this.httpServer.listen(this.serverPort)
      callback && callback(this.serverPort)
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

   private configureApp(): void
   {
      this.app.use(json())
      this.app.use(urlencoded({extended: true}))
      this.app.use(cors())
   }

   private configureRouter(): void
   {
      RouterConfig.forEach(() => {
         this.app.use()
      })
   }

   private configureProvider(): void
   {
      ProviderConfig.forEach(() => {})
   }
}

export {Server}