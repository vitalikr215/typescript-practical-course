import { FormEvent, useState } from "react"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = ()=>{
  const [term, setTerm] = useState('');
  const {searchRepositories } = useActions();
  
  //use selector hook has a similar functionality as a map
  // you are getting whole state and could filter only what you need
  //from it as in output
  const {data, error, loading} = useTypedSelector(
    (state)=>state.repositories
  );
  
  const onSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    searchRepositories(term);
  };


  return <div>
    <h1>Search for NPM Packages</h1>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e=> setTerm(e.target.value)}/>
      <button>Search..</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>LOADING...</h3>}
    {
      !error && !loading && 
      data.map((name)=><div key={name}>{name}</div>)
    }
  </div>
  
}