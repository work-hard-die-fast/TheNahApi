import {createClient} from "redis"
import {Env} from "../constant"

const RedisClient = createClient({
   url: Env.redisUrl
})

RedisClient.on("error", async (error) => {
   console.log("--- redis is dump")
   console.error(error)
   await RedisClient.disconnect()
   console.log("---------------------")
})

RedisClient.on("disconnect", () => {
   console.log("--- disconnected redis")
})

RedisClient.on("connect", () => {
   console.log("--- connect redis successfully")
})

export {RedisClient}

// await client.connect();
//
// await client.set('key', 'value');
// const value = await client.get('key');
// await client.disconnect();