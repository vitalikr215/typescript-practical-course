import {User} from '../models/User'

export class UserFrorm{
  constructor(public parent: Element, public model: User){
    model.on('change', ()=>{
      this.render();
    });
  }

  eventsMap():{[key: string]:()=> void}{
    return {
      'click:.set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick = ():void=>{
    this.model.setRandomAge();
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

  render():void{
    //we do this to do not duplicate a form content when we re-render form
    this.parent.innerHTML ='';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
   
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
    
  }

  template(): string{
    return `
      <div>
        <h1>User Frorm</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input/>
        <button>Click me !</button>
        <button class='set-age'>Set Random Age</button>
      </div>
    `
  }
}