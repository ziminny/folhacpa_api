import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("type_question")
class TypeQuestion
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  name:string;

  @Column({type:"int"})
  code:number;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

}

export default TypeQuestion;