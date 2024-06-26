import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MedataKeys, Methods } from './routes';

const router = AppRouter.getInstance();

export function controller(routePrefix: string){
  return function(target: any){
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MedataKeys.Path, target.prototype, key);
      const method = Reflect.getMetadata(MedataKeys.Method, target.prototype, key) as Methods;

      //asscoate with Express handler functions that marked with @get decorator
      if (path){
        console.log(`${key}:${path}`);
        //the same as router.get or router.post
        router[method](`${routePrefix}${path}`,routeHandler);
      }
    });
  }
}