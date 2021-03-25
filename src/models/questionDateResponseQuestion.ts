import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import DateResponseQuestion from "./dateResponseQuestion";
import Question from "./question";

@Entity("question_date_response_question")
class QuestionDateResponseQuestion
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  note:string;

  @Column({name:"date_response_id"})
  dateResponseId:string;

  @Column({name:"question_id"})
  questionId:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @ManyToOne( () => DateResponseQuestion)
  @JoinColumn({ name:'date_response_id' , referencedColumnName:'id' })
  dateResponseQuestion:DateResponseQuestion

  @ManyToOne( () => Question)
  @JoinColumn({ name:'question_id' , referencedColumnName:'id' })
  question:Question;




}

export default QuestionDateResponseQuestion;