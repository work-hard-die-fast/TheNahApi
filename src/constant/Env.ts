require("dotenv").config()

const Env = Object.freeze({
   // server
   serverPort: process.env.SERVER_PORT as any,

   // mariadb
   dbType: process.env.DB_TYPE as any,
   dbHost: process.env.DB_HOST as any,
   dbPort: process.env.DB_PORT as any,
   dbUsername: process.env.DB_USERNAME as any,
   dbPassword: process.env.DB_PASSWORD as any,
   dbName: process.env.DB_NAME as any,

   // jsonwebtoken
   jwtSecret: process.env.JWT_SECRET as any,

   // email
   emailHost: process.env.EMAIL_HOST as any,
   emailPort: process.env.EMAIL_PORT as any,
   emailUser: process.env.EMAIL_USER as any,
   emailPassword: process.env.EMAIL_PASSWORD as any,

   // redis
   redisUrl: process.env.REDIS_URL as any
})

export {Env}