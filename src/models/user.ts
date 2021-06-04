import {  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import DateResponseQuestion from "./dateResponseQuestion";
import Period from "./period";
import Rule from "./rule";
import ResetPassword from "./resetPassword";

@Entity("user")
class User
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column({nullable: false})
  name:string;

  @Column()
  avatar:string;

  @Column({ name: "last_name"})
  lastName:string;

  @Column()
  email:string;

  @Column()
  password:string;

  @Column({name:'period_id'})
  periodId:string;

  @Column({name:'rule_id'})
  ruleId:string;

  @ManyToOne( () => Rule)
  @JoinColumn({ name:'rule_id' , referencedColumnName:'id' })
  rule:Rule

  @ManyToOne( () => Period)
  @JoinColumn({ name:'period_id' , referencedColumnName:'id' })
  period:Period


  @OneToMany( () => DateResponseQuestion , (dateResponseQuestion:DateResponseQuestion) => dateResponseQuestion.userId )
  user:DateResponseQuestion[]

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToOne( () => ResetPassword)
  @JoinColumn({ name:'id' , referencedColumnName:'userId' })
  resetPassword:ResetPassword;



 
}

export default User;