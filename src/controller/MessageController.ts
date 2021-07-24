import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class MessageController{
    private entitymanager = getConnection().manager;

    async addMessage(request: Request, reponse: Response, next: NextFunction){
        
    }
}