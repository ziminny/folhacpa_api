import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Feedback from "./feedback";
import Question from "./question";

@Entity("category")
class Category
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  name:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToOne( () => Feedback)
  @JoinColumn({ name:'id' , referencedColumnName:'categoryId' })
  feedback:Feedback;

  @OneToMany( () => Question , (question:Question) => question.categoryId )
  question:Question[]
}

export default Category;