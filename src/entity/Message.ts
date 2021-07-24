import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { User } from "./User";

@Entity()
export class Message{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string;

    @ManyToMany(() => User, user => user.message)
    @JoinTable()
    participant: User[];



}