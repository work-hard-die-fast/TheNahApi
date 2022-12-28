import "reflect-metadata"
import {DataSource} from "typeorm"
import {Env} from "../constant";

const MariadbConnection = new DataSource({
   type: Env.dbType,
   host: Env.dbHost,
   port: Env.dbPort,
   username: Env.dbUsername,
   password: Env.dbPassword,
   database: Env.dbName,
   synchronize: true,
   logging: false,
   entities: [],
   migrations: [],
   subscribers: [],
})

export {MariadbConnection}