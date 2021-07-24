import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";

@Entity()
export class Post{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    content: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @ManyToMany(() => User, user => user.postsRead)
    @JoinTable()
    readers: User[];

}