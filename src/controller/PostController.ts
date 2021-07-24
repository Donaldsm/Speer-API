import { getConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class PostController{
    private entitymanager = getConnection().manager;

    // used to add user posts to the database.
    async addPost(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        var post = await this.entitymanager.query(`
            SELECT * FROM addPost('${request.body.content}', '${request.body.userEmail}')
        `)
        console.log("post added..");
        console.log(post[0]);
        return;

    }

    // used to delete user posts from the database.
    async deletePost(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        await this.entitymanager.query(`
            SELECT * FROM deletePost('${request.body.postId}')
        `)
        console.log("Post deleted...");
        return;

    }

    // used to update a post in the database making sure that the posting user can update it
    async updatePost(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        var update = await this.entitymanager.query(`
            SELECT * FROM updatePost('${request.body.postId}', '${request.body.user}')
        `)
        console.log("post updated!")
        console.log(update[0]);
        return;

    }

    // used to track which users have read a post in the database.
    async readPost(request: Request, response: Response, next: NextFunction){
        console.log(request.body);
        var reader = await this.entitymanager.query(`
            SELECT * FROM readPost('${request.body.postId}', '${request.body.user}')
        `)
        console.log("Post: " + reader[0].id + " read by: " + reader[0].userEmail);
        return;
    }
}