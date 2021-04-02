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
exports.refreshTokenService = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../../errors/AppError"));
var user_1 = __importDefault(require("../../models/user"));
var token_1 = __importDefault(require("../../configs/token"));
var RefreshToken_1 = require("../../redis/services/RefreshToken");
var BlockListToken_1 = require("../../redis/services/BlockListToken");
var RefreshTokenService = /** @class */ (function () {
    function RefreshTokenService() {
    }
    RefreshTokenService.prototype.execute = function (_a) {
        var refreshToken = _a.refreshToken, id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var exists, blockList, newRefreshToken, userRepository, user, expiresIn, tokenKey, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, RefreshToken_1.refreshToken.existsToken(refreshToken)];
                    case 1:
                        exists = _b.sent();
                        console.log(refreshToken);
                        if (!exists) {
                            throw new AppError_1.default("Refresh token invalido!");
                        }
                        if (!id) {
                            throw new AppError_1.default("O id é obrigatório !");
                        }
                        return [4 /*yield*/, BlockListToken_1.blockListToken.existsToken(refreshToken)];
                    case 2:
                        blockList = _b.sent();
                        if (blockList) {
                            throw new AppError_1.default("Este refresh token não esta mais acessivel");
                        }
                        return [4 /*yield*/, RefreshToken_1.refreshToken.removeToken(refreshToken)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, RefreshToken_1.refreshToken.addRefreshToken()];
                    case 4:
                        _b.sent();
                        newRefreshToken = RefreshToken_1.refreshToken.getRefreshToken();
                        userRepository = typeorm_1.getRepository(user_1.default);
                        return [4 /*yield*/, userRepository.findOne({ id: id })];
                    case 5:
                        user = _b.sent();
                        if (!user) {
                            throw new AppError_1.default("Usuário não encontrado");
                        }
                        expiresIn = token_1.default.expiresIn, tokenKey = token_1.default.tokenKey;
                        token = jsonwebtoken_1.sign({}, tokenKey, {
                            subject: user.id,
                            expiresIn: expiresIn
                        });
                        return [2 /*return*/, {
                                refreshToken: newRefreshToken,
                                token: token
                            }];
                }
            });
        });
    };
    return RefreshTokenService;
}());
exports.refreshTokenService = new RefreshTokenService;
