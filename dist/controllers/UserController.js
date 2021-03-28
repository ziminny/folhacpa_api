"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService_1 = require("../services/user/AuthService");
var CreateUserServices_1 = require("../services/user/CreateUserServices");
var DeleteUserService_1 = require("../services/user/DeleteUserService");
var ListOneUserService_1 = require("../services/user/ListOneUserService");
var ListUserService_1 = require("../services/user/ListUserService");
var UpdateAvatarUserService_1 = require("../services/user/UpdateAvatarUserService");
var UpdateUserService_1 = require("../services/user/UpdateUserService");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, lastName, email, password, periodId, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, lastName = _a.lastName, email = _a.email, password = _a.password, periodId = _a.periodId;
                        return [4 /*yield*/, CreateUserServices_1.createUserServices.execute({ name: name, lastName: lastName, email: email, password: password, periodId: periodId })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, response.status(201).json(user)];
                }
            });
        });
    };
    UserController.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ListUserService_1.listUserService.execute()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    UserController.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, DeleteUserService_1.deleteUserService.execute(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    UserController.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, lastName, email, password, periodId, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, lastName = _a.lastName, email = _a.email, password = _a.password, periodId = _a.periodId;
                        return [4 /*yield*/, UpdateUserService_1.updateUserService.execute({ id: id, name: name, lastName: lastName, email: email, password: password, periodId: periodId })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    UserController.listOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, ListOneUserService_1.listOneUserService.execute(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    UserController.auth = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, _b, user, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, AuthService_1.authService.execute({ email: email, password: password })];
                    case 1:
                        _b = _c.sent(), user = _b.user, token = _b.token;
                        return [2 /*return*/, response.json({ user: user, token: token })];
                }
            });
        });
    };
    UserController.updateAvatar = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //const { email , password} = request.body;
                        console.log(request.file);
                        return [4 /*yield*/, UpdateAvatarUserService_1.updateAvatarUserService.execute({
                                userId: request.user.id,
                                avatarFilename: request.file.filename
                            })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
