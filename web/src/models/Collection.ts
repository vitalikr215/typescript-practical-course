import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Events } from "./Model";


export class Collection<T,T1>{
  models : T[] = [];
  private events: Events;
  constructor(private rootUrl, private deserialize: (json: T1) => T){
    this.events = new Eventing();
  }

  get on() {
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  fetch():void{
    axios.get(this.rootUrl)
    .then((response: AxiosResponse)=>{
      response.data.forEach((value:T1 )=> {
        this.models.push(this.deserialize(value));
      });
    });
    this.trigger('change');
  }
}