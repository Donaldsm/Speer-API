import { Entity, PrimaryColumn, Column, ManyToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToMany(() => User, user => user.messagesRead)
    @JoinTable()
    reader: User[];



}