import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user";

@Entity("period")
class Period 
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

  @OneToMany( () => User , (user:User) => user.periodId )
  user:User[]

}

export default Period;