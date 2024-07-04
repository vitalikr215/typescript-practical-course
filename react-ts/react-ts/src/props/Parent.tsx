import {Child} from './Child'; 


const Parent = ()=>{
  return <Child color='red' onClick={()=>{console.log('clicked with red')}}/>

  //You're can't write <Clild>..something</Child> because their props have
  //no Children property
  //but you coan write <ChildAsFunctionalComponent>..something</ChildAsFunctionComponent>
}

export default Parent;