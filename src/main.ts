import {Server} from "./bootstrap"

function bootstrap()
{
   (new Server()).start((port: number) => {
      console.log(`--- server is listen on port ${port}`)
   }).then()
}

bootstrap()