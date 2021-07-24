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
}]