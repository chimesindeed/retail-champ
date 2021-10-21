import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModuleRoute} from './route-components/DiscountsModuleRoute'

export const App = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/discounts' exact component={DiscountsModuleRoute}/>
          </Switch>
        </div>
      </Router>
    )
}