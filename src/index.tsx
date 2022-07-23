import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import redux from './app/redux';


// const models = new Models();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(redux)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/maxima-react-app'}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
