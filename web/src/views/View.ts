import { Callback, HasId, Model } from "../models/Model";


export abstract class View<T extends Model<K>, K extends HasId>{
  regions: {[key:string] : Element} = {};
  
  constructor(public parent: Element, public model: T){
    model.on('change', ()=>{
      this.render();
    });
  }

  mapRegions(fragment : DocumentFragment){
    const regionsMap = this.regionsMap();

    for (let key in regionsMap){
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element){
        this.regions[key] = element;
      }
    }
  }

  onRender():void{}

  render():void{
    //we do this to do not duplicate a form content when we re-render form
    this.parent.innerHTML ='';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
   
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content); 

    this.onRender();

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

  eventsMap():{[key: string]:()=> void}{
    return {};
  }

  regionsMap():{[key: string] :string}{
    return {};
  }

  abstract template(): string;
}