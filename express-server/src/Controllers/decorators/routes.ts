import 'reflect-metadata';
import { MedataKeys, Methods } from './enums';
import { RequestHandler } from 'express';

//this interface is using to restrict type of functions where we can
//apply out @get or @post decorators
interface RequestHandlerDescriptor extends PropertyDescriptor{
  value? : RequestHandler
}



function routeBinder(method:string){
  return function(path:string){
    return function(target: any, key: string, desc: RequestHandlerDescriptor){
      Reflect.defineMetadata(MedataKeys.Path, path, target, key);
      Reflect.defineMetadata(MedataKeys.Method, method, target, key);
    }
  }
}



export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);