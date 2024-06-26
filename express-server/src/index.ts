import express, {Request, Response} from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { LoginController } from './Controllers/LoginController';
import { AppRouter } from './AppRouter';

const loginCont = new LoginController();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['loggedin']}));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, ()=>{
  console.log("Server runs on port 3000");
  
});