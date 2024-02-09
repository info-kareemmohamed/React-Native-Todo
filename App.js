import Router from './Src/Routes';
import { store } from "./Src/Redux/Store";
import { Provider } from 'react-redux'

export default function App() {
  return (
   
    <Provider store={store}>
      <Router />
    </Provider>
    );
}


