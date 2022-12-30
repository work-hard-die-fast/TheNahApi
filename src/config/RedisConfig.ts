import {createClient} from "redis"
import {Env} from "../constant"

const RedisClient = createClient({
   url: Env.redisUrl
})

export {RedisClient}

// await client.connect();
//
// await client.set('key', 'value');
// const value = await client.get('key');
// await client.disconnect();