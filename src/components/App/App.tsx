import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Counter from '../Counter/Counter'
import Page1 from '../Page1/Page1'
import Page2 from '../Page2/Page2'

import './App.css'

const App = () => (
  <div className='app'>
    <Switch>
      <Route exact path='/rX'>
        <Page1 />
      </Route>
      <Route exact path='/mX'>
        <Page2 />
      </Route>
      <Route exact path='/test'>
        <Counter initialCount={0} />
      </Route>
    </Switch>
  </div>
)

export default App
