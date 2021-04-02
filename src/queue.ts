import dotenv from "dotenv";
dotenv.config();
import {mailQueueAccountCreation, mailQueueResetPassword,sendQueueMessageAddNewCategory} from "./libs/Queue";
import sendEmailResetPassword from "./jobs/sendEmailResetPassword";
import sendEmailAccountCreation from "./jobs/sendEmailAccountCreation";
import sendMessageAddNewCategory from "./jobs/sendMessageAddNewCategory";

mailQueueResetPassword.process(sendEmailResetPassword.handle);
mailQueueAccountCreation.process(sendEmailAccountCreation.handle);
sendQueueMessageAddNewCategory.process(sendMessageAddNewCategory.handle);