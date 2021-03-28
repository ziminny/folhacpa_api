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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var TypeQuestion = /** @class */ (function () {
    function TypeQuestion() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], TypeQuestion.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TypeQuestion.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], TypeQuestion.prototype, "code", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], TypeQuestion.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], TypeQuestion.prototype, "updatetAt", void 0);
    TypeQuestion = __decorate([
        typeorm_1.Entity("type_question")
    ], TypeQuestion);
    return TypeQuestion;
}());
exports.default = TypeQuestion;
