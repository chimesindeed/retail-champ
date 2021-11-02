<<<<<<< HEAD
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from '../Components/DiscountsModule'
import {LoginModule} from '../Components/LoginModule'
export const App = () => {
       
=======
import React, {useState, useContext} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from '../Components/DiscountsModule'
import {LoginModule} from '../Components/LoginModule'
import {LoginBarToggle} from '../Components/DiscountsModule/Context/contextObjects'

export const App = () => {
    const handleClick = () => {
        setLoginNavToggle((prevState)=>!prevState)
    }
    const [loginNavToggle, setLoginNavToggle] = useState(LoginBarToggle)
>>>>>>> 2e6505ed607aa1e5b5fbbd181598665218cbd75f
    return (
        <Router>
            <Switch>
                <Route path='/discounts' exact component={DiscountsModule}/>
                <Route path='/login' exact component = {LoginModule}/>
            </Switch>
        </Router>
    )
}