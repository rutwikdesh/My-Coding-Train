import { Redis } from "ioredis";

const client = new Redis();

// Optional if not using default host and port
// const client = new Redis({
//   host: process.env.REDIS_HOST || "127.0.0.1",
//   port: process.env.REDIS_PORT || 6379,
// });

client.on("connect", () => {
  console.log("✅ Redis connected");
});

client.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

// export { client };
export default client;
