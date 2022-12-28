import "reflect-metadata";
import {DataSource} from "typeorm";

const MariadbConnection = new DataSource({
   type: "mariadb",
   host: "",
   port: 3306,
   username: "",
   password: "",
   database: "",
   synchronize: true,
   logging: false,
   entities: [],
   migrations: [],
   subscribers: [],
});

export {MariadbConnection}