"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var user_1 = __importDefault(require("./user"));
var ResetPassword = /** @class */ (function () {
    function ResetPassword() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], ResetPassword.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "user_id" }),
        __metadata("design:type", String)
    ], ResetPassword.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column({ name: "expire_in" }),
        __metadata("design:type", Number)
    ], ResetPassword.prototype, "expireIn", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResetPassword.prototype, "token", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], ResetPassword.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ResetPassword.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return user_1.default; }, function (user) { return user.id; }),
        typeorm_1.JoinColumn({ name: 'user_id', referencedColumnName: 'id' }),
        __metadata("design:type", user_1.default)
    ], ResetPassword.prototype, "user", void 0);
    ResetPassword = __decorate([
        typeorm_1.Entity("reset_password")
    ], ResetPassword);
    return ResetPassword;
}());
exports.default = ResetPassword;
