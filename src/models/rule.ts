import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user";

@Entity("rule")
class Rule 
{

  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  name:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToMany( () => User , (user:User) => user.ruleId )
  user:User[]

}

export default Rule;