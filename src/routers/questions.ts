

import { Router } from "express";
import AlreadyAnsweredThisMounthController from "../controllers/AlreadyAnsweredThisMounthController";
import CheckResponsesUserServiceController from "../controllers/CheckResponsesUserServiceController";
import DaysNewCategoryController from "../controllers/DaysNewCategoryController";
import InsertDateResponse_dateResponseQuestion_feedbackController from "../controllers/InsertDateResponse_dateResponseQuestion_feedbackController";




const questionRouter = Router();

questionRouter.post("/create",InsertDateResponse_dateResponseQuestion_feedbackController.createMany);
questionRouter.post("/check",CheckResponsesUserServiceController.check);
questionRouter.post("/can_response",AlreadyAnsweredThisMounthController.applyRule);
questionRouter.post("/days",DaysNewCategoryController.days);
export default questionRouter;