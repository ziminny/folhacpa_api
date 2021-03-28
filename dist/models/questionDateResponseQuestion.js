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
var question_1 = __importDefault(require("./question"));
var QuestionDateResponseQuestion = /** @class */ (function () {
    function QuestionDateResponseQuestion() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], QuestionDateResponseQuestion.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], QuestionDateResponseQuestion.prototype, "note", void 0);
    __decorate([
        typeorm_1.Column({ name: "date_response_id" }),
        __metadata("design:type", String)
    ], QuestionDateResponseQuestion.prototype, "dateResponseId", void 0);
    __decorate([
        typeorm_1.Column({ name: "question_id" }),
        __metadata("design:type", String)
    ], QuestionDateResponseQuestion.prototype, "questionId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], QuestionDateResponseQuestion.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], QuestionDateResponseQuestion.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return dateResponseQuestion_1.default; }),
        typeorm_1.JoinColumn({ name: 'date_response_id', referencedColumnName: 'id' }),
        __metadata("design:type", dateResponseQuestion_1.default)
    ], QuestionDateResponseQuestion.prototype, "dateResponseQuestion", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return question_1.default; }),
        typeorm_1.JoinColumn({ name: 'question_id', referencedColumnName: 'id' }),
        __metadata("design:type", question_1.default)
    ], QuestionDateResponseQuestion.prototype, "question", void 0);
    QuestionDateResponseQuestion = __decorate([
        typeorm_1.Entity("question_date_response_question")
    ], QuestionDateResponseQuestion);
    return QuestionDateResponseQuestion;
}());
exports.default = QuestionDateResponseQuestion;
