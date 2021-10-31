import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from '../DiscountsModule'
import {LoginModule} from '../LoginModule'

export const App = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/discounts' exact component={DiscountsModule}/>
            <Route path='/login' exact component = {LoginModule}/>
          </Switch>
        </div>
      </Router>
    )
}