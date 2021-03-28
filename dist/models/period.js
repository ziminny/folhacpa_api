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
var Period = /** @class */ (function () {
    function Period() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Period.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Period.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Period.prototype, "code", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], Period.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], Period.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return user_1.default; }, function (user) { return user.periodId; }),
        __metadata("design:type", Array)
    ], Period.prototype, "user", void 0);
    Period = __decorate([
        typeorm_1.Entity("period")
    ], Period);
    return Period;
}());
exports.default = Period;
