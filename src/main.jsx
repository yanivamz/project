import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
const apiHost = import.meta.env.VITE_API_HOST;

fetch(`${apiHost}/products`)
  .then(res => res.text())
  .then(data => console.log(data));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
