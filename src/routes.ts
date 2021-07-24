import { MessageController } from "./controller/MessageController";
import { PostController } from "./controller/PostController";
import {UserController} from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/speer/users/all",
    controller: UserController,
    action: "allUsers"
},{
    method: "post",
    route: "/speer/users",
    controller: UserController,
    action: "addUser"
},{
    method: "put",
    route: "/speer/users/login",
    controller: UserController,
    action: "loginUser"
},{
    method: "put",
    route: "/speer/users/logout",
    controller: UserController,
    action: "logoutUser"
},{
    method: "post",
    route: "/speer/messages/new",
    controller: MessageController,
    action: "addMessage"
},{
    method: "post",
    route: "/speer/messages/read",
    controller: MessageController,
    action: "markRead"
},{
    method: "post",
    route: "/speer/post/add",
    controller: PostController,
    action: "addPost"
},{
    method: "delete",
    route: "/speer/post/delete",
    controller: PostController,
    action: "deletePost"
},{
    method: "post",
    route: "/speer/post/read",
    controller: PostController,
    action: "readPost"
},{
    method: "put",
    route: "/speer/post/update",
    controller: PostController,
    action: "updatePost"
}]