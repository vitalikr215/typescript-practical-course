import { AxiosPromise, AxiosResponse } from "axios";

export type Callback = ()=>void;

export interface ModelAttributes<T>{
  set(update: T):void;
  get<K extends keyof T>(key: K): T[K];
  getAll():T;
}

export interface Events{
  on(eventName: string, callback: Callback): void;
  trigger(eventName:string):void;
}

export interface Sync<T>{
  fetch(id: number): AxiosPromise<T>
  save(data: T):AxiosPromise<T>
}

export interface HasId{
  id?: number;
}

export class Model<T extends HasId>{
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events : Events
  )
  {}
  
  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attributes.get;
  }

  set(update: T):void{
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch():void{
    const id = this.attributes.get('id');

    //check if id field defined;
    if (typeof id !== 'number'){
      throw new Error("Cannot fetch wihout id");
    }

    this.sync.fetch(id).then((response: AxiosResponse):void=>{
      this.set(response.data);      
    });
  }

  save():void{
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse):void=>{
        this.trigger('save');
      });
  }
}