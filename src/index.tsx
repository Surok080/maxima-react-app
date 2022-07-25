import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import redux from './app/redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(redux)

root.render(
  // <React.StrictMode>
    <BrowserRouter basename={'/maxima-react-app'}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  //</React.StrictMode> 
);
