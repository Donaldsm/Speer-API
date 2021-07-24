import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

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

}
