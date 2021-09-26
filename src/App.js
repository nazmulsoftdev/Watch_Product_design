import React,{useReducer} from "react";
import Product from "./Components/Product/Product";
import './assets/css/global.css';
import SellComponent from "./Components/SellComponent/SellComponent";
import ContextApi from "./Context/ContextApi";

const InitialState = 0;

const reducer = (state, action) => {

       switch (action) {
           case 'Increment':
               return state + 1;
           case 'Decrement':
               return state - 1;
           default:
               return state
      }
}

function App() {

  const [state, dispatch] = useReducer(reducer, InitialState);


  return (
    <div>
      <ContextApi.Provider value={{count:state,CountDispatch:dispatch}}>
          <Product />
          <SellComponent/>
      </ContextApi.Provider>
    </div>
  );
}

export default App;
