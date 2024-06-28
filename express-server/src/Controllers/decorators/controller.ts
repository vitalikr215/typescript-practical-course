import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MedataKeys, Methods } from './enums';
import { RequestHandler, Request, Response, NextFunction } from 'express';

const router = AppRouter.getInstance();

//checking if body has specific fields and then return a middleware that
//will be injected further
function bodyValidators(keys: string[]):RequestHandler{
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body){
      res.status(422).send('Invalid request');
      return;
    }
    
    keys.forEach(key => {
      if (!req.body[key]){
        res.status(400).send(
          `<div>
            <h1>Bad request, there is no ${key} in body</h1>
          <div>`
        );
        return;
      }
    });
    next();
  }
}

export function controller(routePrefix: string){
  return function(target: any){
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MedataKeys.Path, target.prototype, key);
      const method = Reflect.getMetadata(MedataKeys.Method, target.prototype, key) as Methods;

      //get middlewares
      const middlewares = Reflect.getMetadata(
        MedataKeys.Middleware,
        target.prototype,
        key
      ) || [];

      //here we get the list of body props that are going to check
      const requiredBodyProps = Reflect.getMetadata(MedataKeys.Validator,
        target.prototype, key) || [];
      //get middleware which will check if we have that props on request 
      const validatorMiddleware = bodyValidators(requiredBodyProps);

      //asscoate with Express handler functions that marked with @get decorator
      if (path){
        console.log(`${key}:${path}`);
        //the same as router.get or router.post
        router[method](`${routePrefix}${path}`, ...middlewares, validatorMiddleware,
          routeHandler);
      }
    });
  }
}