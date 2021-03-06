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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../../errors/AppError"));
var user_1 = __importDefault(require("../../models/user"));
var hashPassword_1 = __importDefault(require("../../utils/hashPassword"));
var messages_1 = require("../../utils/messages");
var UpdateUserService = /** @class */ (function () {
    function UpdateUserService() {
    }
    UpdateUserService.prototype.execute = function (_a) {
        var name = _a.name, lastName = _a.lastName, email = _a.email, password = _a.password, periodId = _a.periodId, id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var repository, relation, findUser, isModifYourelf, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = typeorm_1.getRepository(user_1.default);
                        // comparar o id do token com o id da url , usu??rio n??o pode alterar outro id que n??o seja o seu
                        console.log(name, lastName, email, password, periodId);
                        return [4 /*yield*/, repository.createQueryBuilder("user")
                                .leftJoinAndSelect("user.rule", "rule_id")
                                .where("user.email = :email", { email: email })
                                .getOne()];
                    case 1:
                        relation = _b.sent();
                        if (!name || !lastName || !email || !password) {
                            throw new AppError_1.default(messages_1.errors.allFieldsRequired);
                        }
                        if ((relation === null || relation === void 0 ? void 0 : relation.rule.name) == 'user') {
                            if (!periodId)
                                throw new AppError_1.default(messages_1.errors.allFieldsRequired);
                        }
                        return [4 /*yield*/, repository.find({ email: email })];
                    case 2:
                        findUser = _b.sent();
                        isModifYourelf = findUser.every(function (user) { return user.id == id; });
                        if (!isModifYourelf) {
                            throw new AppError_1.default(messages_1.errors.emailInUse);
                        }
                        return [4 /*yield*/, repository.update({ id: id }, {
                                name: name,
                                lastName: lastName,
                                email: email,
                                password: hashPassword_1.default(password),
                                periodId: periodId,
                            })];
                    case 3:
                        user = _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    return UpdateUserService;
}());
exports.updateUserService = new UpdateUserService;
