import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Category from "./category";
import QuestionDateResponseQuestion from "./questionDateResponseQuestion";
import TypeQuestion from "./typeQuestion";

@Entity("question")
class Question
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  description:string;

  @Column({name:"category_id"})
  categoryId:string;

  @Column({name:"type_question_id"})
  typeQuestionId:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @ManyToOne( () => TypeQuestion)
  @JoinColumn({ name:'type_question_id' , referencedColumnName:'id' })
  typeQuestion:TypeQuestion

  @ManyToOne( () => Category)
  @JoinColumn({ name:'category_id' , referencedColumnName:'id' })
  category:Category

  @OneToMany( () => QuestionDateResponseQuestion , (questionDateResponseQuestion:QuestionDateResponseQuestion) => questionDateResponseQuestion.questionId )
  questionDateResponseQuestion:QuestionDateResponseQuestion[]

}

export default Question;