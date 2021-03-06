import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
const store = configureStore(window.REDUX_INITIAL_DATA)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
