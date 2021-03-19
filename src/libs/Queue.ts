import Queue from "bull";
import redisConfig from "../configs/redis";
import sendEmailResetPassword from "../jobs/sendEmailResetPassword";

const mailQueue = new Queue(sendEmailResetPassword.key,redisConfig)

export default mailQueue;

