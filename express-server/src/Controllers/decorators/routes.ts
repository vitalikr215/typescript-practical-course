import 'reflect-metadata';


function routeBinder(method:string){
  return function(path:string){
    return function(target: any, key: string){
      Reflect.defineMetadata(MedataKeys.Path, path, target, key);
      Reflect.defineMetadata(MedataKeys.Method, method, target, key);
    }
  }
}

export enum Methods{
  get = 'get',
  post = 'post'
}

export enum MedataKeys{
  Method = 'method',
  Path = 'path'
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);