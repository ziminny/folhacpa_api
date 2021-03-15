import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import QuestionDateResponseQuestion from "./questionDateResponseQuestion";
import User from "./user";

@Entity("date_response_question")
class DateResponseQuestion
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column({name:"user_id"})
  userId:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @ManyToOne( () => User)
  @JoinColumn({ name:'user_id' , referencedColumnName:'id' })
  period:User

  @OneToMany( () => QuestionDateResponseQuestion , (questionDateResponseQuestion:QuestionDateResponseQuestion) => questionDateResponseQuestion.dateResponseId )
  questionDateResponseQuestion:QuestionDateResponseQuestion[]

}

export default DateResponseQuestion;