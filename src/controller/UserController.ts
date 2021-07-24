import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class UserController {
    private entitymanager = getConnection().manager;

    // function to be called when a user is registering to the database.
    async addUser(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        return await this.entitymanager.query(`
            SELECT * FROM addUser('${request.body.email}','${request.body.password}','${request.body.firstName}'
            ,'${request.body.lastName}','${request.body.loggedIn}');
        `)

    }

    // Function to return all of the users and thier information from the database
    async allUsers(request: Request, response: Response, next: NextFunction) {
        console.log("Getting all users.... ");
        return await this.entitymanager.query(`
            SELECT * FROM allUsers();
        `)
    }

    // function to login in a user, returns true if the email and password is correct in the database for the user
    async loginUser(request: Request, response: Response, next: NextFunction) {
        console.log("Logging in user: " + request.body.email);
        var attempt = await this.entitymanager.query(`
            SELECT * FROM loginUser('${request.body.email}', '${request.body.password}')
        `)
        
        console.log(attempt);
        if(Object.keys(attempt).length > 0){
            console.log("Succesful login for: " + attempt[0].Email)
            return true; // returns true to be used by the front end as authentication
        } else {
            console.log("Failed log in attempt for: " + request.body.email);
            return false; // returns true to be used by the front end as authentication
        }
    }

    // function to logout a user from the system
    async logoutUser(request: Request, response: Response, next: NextFunction) {
        console.log("Logging out user: " + request.params);
        var attempt = await this.entitymanager.query(`
            SELECT * FROM logoutUser('${request.body.email}');
        `)
        console.log(attempt);

        if (Object.keys(attempt).length == 0 || attempt[0].loggedIn == true){
            console.log("oops something chucked a wobbly for user: " + request.body.email)
            return false;
        } else {
            console.log("Successful logout of user: " + attempt[0].Email)
            return true;
        }
    }
}