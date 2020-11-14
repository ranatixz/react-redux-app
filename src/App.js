import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>using connect</h1>
        <CakeContainer/>
        <h1>using hooks with react redux</h1>
        <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
