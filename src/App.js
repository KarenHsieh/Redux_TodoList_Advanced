import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './Todo';


import reducer from './reducer';

const initialState = {
  inputValue: '',
  items: []
}

const store = createStore(reducer, initialState);

function App() {
  //console.log(store.getState());
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
