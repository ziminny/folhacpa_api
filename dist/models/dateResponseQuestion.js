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
var questionDateResponseQuestion_1 = __importDefault(require("./questionDateResponseQuestion"));
var user_1 = __importDefault(require("./user"));
var DateResponseQuestion = /** @class */ (function () {
    function DateResponseQuestion() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], DateResponseQuestion.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "user_id" }),
        __metadata("design:type", String)
    ], DateResponseQuestion.prototype, "userId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], DateResponseQuestion.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], DateResponseQuestion.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_1.default; }),
        typeorm_1.JoinColumn({ name: 'user_id', referencedColumnName: 'id' }),
        __metadata("design:type", user_1.default)
    ], DateResponseQuestion.prototype, "period", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return questionDateResponseQuestion_1.default; }, function (questionDateResponseQuestion) { return questionDateResponseQuestion.dateResponseId; }),
        __metadata("design:type", Array)
    ], DateResponseQuestion.prototype, "questionDateResponseQuestion", void 0);
    DateResponseQuestion = __decorate([
        typeorm_1.Entity("date_response_question")
    ], DateResponseQuestion);
    return DateResponseQuestion;
}());
exports.default = DateResponseQuestion;
