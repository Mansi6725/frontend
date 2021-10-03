//REDIS STORE / redis client

const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");  //middleware

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({  //To connect Redis
    host: "localhost",
    port: 6379
});

redisClient.on("error", function(err) {
    console.error("Could not connect to Redis");
});

redisClient.on("connect" , function() {
    console.log("Connect to Redis");
});

module.exports = {
    redisClient,
    RedisStore,
    session
}