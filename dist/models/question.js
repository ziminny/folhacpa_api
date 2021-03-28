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
var category_1 = __importDefault(require("./category"));
var questionDateResponseQuestion_1 = __importDefault(require("./questionDateResponseQuestion"));
var typeQuestion_1 = __importDefault(require("./typeQuestion"));
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Question.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "toltip", void 0);
    __decorate([
        typeorm_1.Column({ name: "category_id" }),
        __metadata("design:type", String)
    ], Question.prototype, "categoryId", void 0);
    __decorate([
        typeorm_1.Column({ name: "type_question_id" }),
        __metadata("design:type", String)
    ], Question.prototype, "typeQuestionId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], Question.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], Question.prototype, "updatetAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return typeQuestion_1.default; }),
        typeorm_1.JoinColumn({ name: 'type_question_id', referencedColumnName: 'id' }),
        __metadata("design:type", typeQuestion_1.default)
    ], Question.prototype, "typeQuestion", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return category_1.default; }),
        typeorm_1.JoinColumn({ name: 'category_id', referencedColumnName: 'id' }),
        __metadata("design:type", category_1.default)
    ], Question.prototype, "category", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return questionDateResponseQuestion_1.default; }, function (questionDateResponseQuestion) { return questionDateResponseQuestion.questionId; }),
        __metadata("design:type", Array)
    ], Question.prototype, "questionDateResponseQuestion", void 0);
    Question = __decorate([
        typeorm_1.Entity("question")
    ], Question);
    return Question;
}());
exports.default = Question;
