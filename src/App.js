import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/taskbox-redux';

import InboxScreen from './components/InboxScreen';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      Hello World
      <InboxScreen />
    </Provider>
  );
}

export default App;
