import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Message } from "./Message";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryColumn()
    Email: string;
    
    @PrimaryColumn()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    loggedIn: boolean;

    @ManyToMany(() => Message, message => message.participant)
    @JoinTable()
    message: Message[];

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

}
