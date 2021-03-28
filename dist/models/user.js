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
var dateResponseQuestion_1 = __importDefault(require("./dateResponseQuestion"));
var period_1 = __importDefault(require("./period"));
var rule_1 = __importDefault(require("./rule"));
var resetPassword_1 = __importDefault(require("./resetPassword"));
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column({ name: "last_name" }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ name: 'period_id' }),
        __metadata("design:type", String)
    ], User.prototype, "periodId", void 0);
    __decorate([
        typeorm_1.Column({ name: 'rule_id' }),
        __metadata("design:type", String)
    ], User.prototype, "ruleId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return rule_1.default; }),
        typeorm_1.JoinColumn({ name: 'rule_id', referencedColumnName: 'id' }),
        __metadata("design:type", rule_1.default)
    ], User.prototype, "rule", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return period_1.default; }),
        typeorm_1.JoinColumn({ name: 'period_id', referencedColumnName: 'id' }),
        __metadata("design:type", period_1.default)
    ], User.prototype, "period", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return dateResponseQuestion_1.default; }, function (dateResponseQuestion) { return dateResponseQuestion.userId; }),
        __metadata("design:type", Array)
    ], User.prototype, "user", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], User.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return resetPassword_1.default; }),
        typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'userId' }),
        __metadata("design:type", resetPassword_1.default)
    ], User.prototype, "resetPassword", void 0);
    User = __decorate([
        typeorm_1.Entity("user")
    ], User);
    return User;
}());
exports.default = User;
