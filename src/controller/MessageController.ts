import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class MessageController{
    private entitymanager = getConnection().manager;

    // adds a message to the system, it also logs a record for both the sender and the reciever
    async addMessage(request: Request, reponse: Response, next: NextFunction){
        console.log(request.body);
        await this.entitymanager.query(`
            SELECT * FROM addMessage('${request.body.content}', '${request.body.sender}', '${request.body.reciever}')
        `);
        console.log("message sent");
        return;
    }

    // marks the message read by a user. to be used when the message is sent by the sender as well.
    async markRead(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        var reader = await this.entitymanager.query(`
            SELECT * FROM markRead('${request.body.user}', '${request.body.messageId}')
        `)
        console.log('Message read by: ' + reader[0].user);
        return;
    }
}