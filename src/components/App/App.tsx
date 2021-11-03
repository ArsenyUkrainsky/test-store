import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import Page1 from '../Page1/Page1'
import Page2 from '../Page2/Page2'

import './App.css'

const App = () => (
  <div className='app'>
    <nav>
      <Link to='/rX' className='button' style={{ backgroundImage: 'linear-gradient(to left, #4880EC, #df5d18)', borderRadius: '40px 20px', margin: '35px' }}>
        Redux
      </Link>
      <Link to='/mX' className='button' style={{ backgroundImage: 'linear-gradient(to right, #4880EC, #df5d18)', borderRadius: '20px 40px', margin: '35px' }}>
        MobX
      </Link>
    </nav>
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
