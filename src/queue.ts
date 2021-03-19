import dotenv from "dotenv";
dotenv.config();
import Queue from "./libs/Queue";
import sendEmailResetPassword from "./jobs/sendEmailResetPassword";

Queue.process(sendEmailResetPassword.handle);