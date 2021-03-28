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
var Rule = /** @class */ (function () {
    function Rule() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Rule.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Rule.prototype, "name", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], Rule.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], Rule.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return user_1.default; }, function (user) { return user.ruleId; }),
        __metadata("design:type", Array)
    ], Rule.prototype, "user", void 0);
    Rule = __decorate([
        typeorm_1.Entity("rule")
    ], Rule);
    return Rule;
}());
exports.default = Rule;
