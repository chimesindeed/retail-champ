import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from './route-components/DiscountsModule'
export const App = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/discounts' exact component={DiscountsModule}/>
          </Switch>
        </div>
      </Router>
    )
}