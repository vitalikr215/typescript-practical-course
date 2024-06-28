import {NextFunction, Request, Response} from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";

function requireAuth(req: Request, res: Response, next: NextFunction) : void{
  if (req.session && req.session.loggedin){
    next();
    return;
  }
  
  res.status(403).send(`<div><h1>Not allowed</h1></div>`);
}

@controller('')
export class HomeController{
  
  @get('/')
  getHome(req : Request, res : Response){
    if (req.session && req.session.loggedin){
      res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    }
    else{
      res.send(`
      <div>
        <h1>You are not logged in</h1>
        <a href="/auth/login">Login</a>
      </div>
    `);
    }
  }
  
  @get('/protected')
  @use(requireAuth)
  getProtected(req:Request, res:Response){
    res.send(`
    <div>
      <h1>Welcome to protected path logged in user !</h1>
    <div>
    `)
  };
}