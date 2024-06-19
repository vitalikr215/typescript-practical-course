import { Callback, HasId, Model } from "../models/Model";


export abstract class View<T extends Model<K>, K extends HasId>{
  constructor(public parent: Element, public model: T){
    model.on('change', ()=>{
      this.render();
    });
  }

  render():void{
    //we do this to do not duplicate a form content when we re-render form
    this.parent.innerHTML ='';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
   
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
    
  }

  bindEvents(fragment: DocumentFragment):void{
    const eventMap = this.eventsMap();

    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  abstract eventsMap():{[key: string]:()=> void};
  abstract template(): string;
}