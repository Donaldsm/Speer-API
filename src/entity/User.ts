import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Message } from "./Message";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryColumn()
    Email: string;
    
    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    loggedIn: boolean;

    @ManyToMany(() => Message, message => message.participant)
    message: Message[];

    @ManyToMany(() => Message, message => message.reader)
    messagesRead: Message[];

    @ManyToMany(() => Post, post => post.readers)
    postsRead: Post[];
    
    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    

}
