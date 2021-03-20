import Queue from "bull";
import redisConfig from "../configs/redis";
import sendEmailAccountCreation from "../jobs/sendEmailAccountCreation";
import sendEmailResetPassword from "../jobs/sendEmailResetPassword";

const mailQueueResetPassword = new Queue(sendEmailResetPassword.key,redisConfig)
const mailQueueAccountCreation = new Queue(sendEmailAccountCreation.key,redisConfig)
export  {mailQueueResetPassword,mailQueueAccountCreation};

