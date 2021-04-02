import Queue from "bull";
import redisConfig from "../configs/redis";
import sendEmailAccountCreation from "../jobs/sendEmailAccountCreation";
import sendEmailResetPassword from "../jobs/sendEmailResetPassword";
import sendMessageAddNewCategory from "../jobs/sendMessageAddNewCategory";

const mailQueueResetPassword = new Queue(sendEmailResetPassword.key,redisConfig)
const mailQueueAccountCreation = new Queue(sendEmailAccountCreation.key,redisConfig)
const sendQueueMessageAddNewCategory = new Queue(sendMessageAddNewCategory.key,redisConfig)
export  {mailQueueResetPassword,mailQueueAccountCreation,sendQueueMessageAddNewCategory};

