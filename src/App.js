import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './lib/taskbox-redux';

function App() {
  return (
    <Provider store={store}>
      Hello World
    </Provider>
  );
}

export default App;
