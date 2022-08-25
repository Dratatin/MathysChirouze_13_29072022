import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/main.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App></App>
    {/* </React.StrictMode> */}
  </Provider>
);

