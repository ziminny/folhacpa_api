import dotenv from "dotenv";
dotenv.config();
import {mailQueueAccountCreation, mailQueueResetPassword} from "./libs/Queue";
import sendEmailResetPassword from "./jobs/sendEmailResetPassword";
import sendEmailAccountCreation from "./jobs/sendEmailAccountCreation";

mailQueueResetPassword.process(sendEmailResetPassword.handle);
mailQueueAccountCreation.process(sendEmailAccountCreation.handle);