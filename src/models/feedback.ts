import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Category from "./category";

@Entity("feedback")
class Feedback
{

  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  opinion:string;

  @Column({name:"category_id"})
  categoryId:string;

  @Column({name:"user_id"})
  userId:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToOne( () => Category)
  @JoinColumn({ name:'category_id' , referencedColumnName:'id' })
  category:Category;

}

export default Feedback;