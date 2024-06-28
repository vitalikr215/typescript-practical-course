import 'reflect-metadata'
import { MedataKeys } from './enums'
import { RequestHandler } from 'express'

export function use(middleware: RequestHandler){
  return function(target:any, key: string){
    const middlewares = Reflect.getMetadata(MedataKeys.Middleware, target, key)
      || [];
    
    middlewares.push(middleware);
    Reflect.defineMetadata(MedataKeys.Middleware, middlewares, target, key);
  }
}