import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Category from "./category";

@Entity('color')
class Color 
{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  hex:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @UpdateDateColumn({name: "updated_at"})
  updatetAt:Date;

  @OneToMany( () => Category , (category:Category) => category.colorId )
  question:Category[]
}

export default Color;