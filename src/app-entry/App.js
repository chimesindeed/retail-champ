import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModuleRoute} from './route-components/DiscountsModuleRoute'
import {LoginModuleRoute} from './route-components/LoginModuleRoute'

export const App = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/discounts' exact component={DiscountsModuleRoute}/>
            <Route path='/login' exact component = {LoginModuleRoute}/>
          </Switch>
        </div>
      </Router>
    )
}