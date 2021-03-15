import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user";

@Entity("reset_password")
class ResetPassword 
{
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column({name:"user_id"})
  userId:string;

  @Column({name:"expire_in"})
  expireIn:number;

  @Column()
  token:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToOne( type => User , (user:User) => user.id)
  @JoinColumn({ name:'user_id' , referencedColumnName:'id' })
  user:User;
}

export default ResetPassword;