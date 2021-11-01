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
    return (
        <div>
            <button className="hamburger-button" onClick={handleClick}>-</button>
            {
                loginNavToggle
                ? <LoginModule />
                : null
            }
            <Router>
                <Switch>
                    <Route path='/discounts' exact component={DiscountsModule}/>
                    <Route path='/login' exact component = {LoginModule}/>
                </Switch>
            </Router>
        </div>
    )
}