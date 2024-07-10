import { Provider } from "react-redux";
import { store } from "../state";
import { RepositoriesList } from "./RepositoriesList";

export const App = ()=>{
  return <Provider store={store}>
    <RepositoriesList/>
  </Provider>
}