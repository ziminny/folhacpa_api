"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AlreadyAnsweredThisMounthController_1 = __importDefault(require("../controllers/AlreadyAnsweredThisMounthController"));
var CheckResponsesUserServiceController_1 = __importDefault(require("../controllers/CheckResponsesUserServiceController"));
var DaysNewCategoryController_1 = __importDefault(require("../controllers/DaysNewCategoryController"));
var InsertDateResponse_dateResponseQuestion_feedbackController_1 = __importDefault(require("../controllers/InsertDateResponse_dateResponseQuestion_feedbackController"));
var questionRouter = express_1.Router();
questionRouter.post("/create", InsertDateResponse_dateResponseQuestion_feedbackController_1.default.createMany);
questionRouter.post("/check", CheckResponsesUserServiceController_1.default.check);
questionRouter.post("/can_response", AlreadyAnsweredThisMounthController_1.default.applyRule);
questionRouter.post("/days", DaysNewCategoryController_1.default.days);
exports.default = questionRouter;
