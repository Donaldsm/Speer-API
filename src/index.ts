import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import * as cors from "cors";


createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());
    // Cors networking configuration
    const options: cors.CorsOptions = {
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'X-Access-Token',
        ],
        credentials: true,
        methods: 'GET,HEAD,PUT,POST,DELETE',
        preflightContinue: false,
      };
    app.use(cors(options));
    app.options('*',cors(options));

    // register express routes from defined application routes in routes.ts
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    app.listen(3030);


    console.log("Express server has started on port 3030.");

}).catch(error => console.log(error));
