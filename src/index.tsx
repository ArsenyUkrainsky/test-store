import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Provider } from 'react-redux'
import App from './components/App/App'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
)
