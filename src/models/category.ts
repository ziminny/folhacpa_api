import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Color from "./color";
import Feedback from "./feedback";
import Question from "./question";

@Entity("category")
class Category
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  name:string;

  @Column({name:'color_id'})
  colorId:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToOne( () => Feedback)
  @JoinColumn({ name:'id' , referencedColumnName:'categoryId' })
  feedback:Feedback;

  @OneToMany( () => Question , (question:Question) => question.categoryId )
  question:Question[]

  @ManyToOne( () => Color)
  @JoinColumn({ name:'color_id' , referencedColumnName:'id' })
  color:Color
}

export default Category;