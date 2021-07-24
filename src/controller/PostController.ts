import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class PostController{
    private entitymanager = getConnection().manager;

    async addPost(request: Request, response: Response, next: NextFunction){

    }

    async deletePost(request: Request, response: Response, next: NextFunction){

    }

    async updatePost(request: Request, response: Response, next: NextFunction){
        
    }

    async readPost(request: Request, response: Response, next: NextFunction){

    }
}