import 'reflect-metadata'
import { MedataKeys } from './enums'

export function bodyValidator(...keys: string[]){
  return function(target: any, key: string){
    Reflect.defineMetadata(MedataKeys.Validator, keys, target, key);
  }
}