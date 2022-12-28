import express, {Application} from "express";
import * as http from "http";
import {MariadbConnection} from "../config";

class Server
{
   private readonly serverPort: number;
   private readonly app: Application;
   private readonly httpServer: http.Server;

   constructor()
   {
      this.app = express();
      this.serverPort = 3000;
      this.httpServer = http.createServer(this.app);
   }
}

export {Server}