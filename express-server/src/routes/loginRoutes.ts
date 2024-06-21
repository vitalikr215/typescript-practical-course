import { Router, Request, Response, NextFunction} from "express";

//to have a type check for body prorety extend Request interface
interface RequestWithBody extends Request{
  body: {[key: string]:string | undefined}
}

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction) : void{
  if (req.session && req.session.loggedin){
    next();
    return;
  }
  
  res.status(403);
  res.send(`<div><h1>Not allowed</h1></div>`);
}

router.get('/',(req : Request, res : Response)=>{
  if (req.session && req.session.loggedin){
    res.send(`
    <div>
      <h1>You are logged in</h1>
      <a href="/logout">Logout</a>
    </div>
  `);
  }
  else{
    res.send(`
    <div>
      <h1>You are not logged in</h1>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

router.get('/login',(req : Request, res : Response)=>{
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
});

router.post('/login',(req : RequestWithBody, res : Response)=>{
  const {email, password} = req.body;
  if (email && password && email ==='mail@mail.com' && password==='password'){
    req.session = {loggedin : true};
    res.redirect('/');
  }
  else{
    res.send(`<h1>Invalid email or password</h1>`);
  }
});

router.get('/logout', (req: RequestWithBody, res: Response) =>{
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth,(req:Request, res:Response)=>{
  res.send(`
  <div>
    <h1>Welcome to protected path logged in user !</h1>
  <div>
  `)
});

export { router };