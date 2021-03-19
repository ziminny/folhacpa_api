import { QueueOptions } from "bull";

export default<QueueOptions> {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
}