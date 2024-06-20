import { Collection } from "../models/Collection";
import { Model } from "../models/Model";

export abstract class CollectionView<T, T1>{
  constructor(public parent: Element, public collection: Collection<T,T1>){

  }
  render():void{
    this.parent.innerHTML ='';

    const templateElement = document.createElement('template');
    
    for (let model of this.collection.models){
      const wrapper = document.createElement('div');
      this.renderItem(wrapper, model);
      templateElement.content.append(wrapper);
      console.log(templateElement.innerHTML);
    }
    
    this.parent.append(templateElement.content);
  }

  abstract renderItem(itemParent: Element, model: T):void;
}