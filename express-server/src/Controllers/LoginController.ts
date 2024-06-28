import {NextFunction, Request, Response} from "express";
import { get, post } from "./decorators/routes";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";
import { bodyValidator } from "./decorators/bodyValidator";

function testLogger (req: Request, res: Response, next: NextFunction){
  console.log("Request done !!");
  next();
}

@controller('/auth')
export class LoginController{
  
  @get('/login')
  @use(testLogger)
  getLogin(req : Request, res : Response){
    res.send(`
    <form method="POST">
      <div>
        <label>Email:</label>
        <input name="email" />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req : Request, res : Response){
    const {email, password} = req.body;
    if (email ==='mail@mail.com' && password==='password'){
      req.session = {loggedin : true};
      res.redirect('/');
    }
    else{
      res.send(`<h1>Invalid email or password</h1>`);
    }
  }

  @get('/logout')
  getLogout(req : Request, res : Response){
    req.session = undefined;
    res.redirect('/');
  }

  //as we are using restricting interface RequestHandlerDescriptor
  //which allow as to apply @get decorator only to functions with specific
  //signature, the code above will give us an error 
  /*@get('/')
  add (a: number, b:number):number{
    return a+b;
  }*/
}