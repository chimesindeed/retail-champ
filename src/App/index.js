import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from '../Components/DiscountsModule'
import {LoginModule} from '../Components/LoginModule'
export const App = () => {
       
    return (
        <Router>
            <Switch>
                <Route path='/discounts' exact component={DiscountsModule}/>
                <Route path='/login' exact component = {LoginModule}/>
            </Switch>
        </Router>
    )
}