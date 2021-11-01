import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscountsModule} from '../Components/DiscountsModule'
import {LoginModule} from '../Components/LoginModule'

export const App = () => {
    const handleClick = () => {
        setLoginNavToggle((prevState)=>!prevState)
    }
    const [loginNavToggle, setLoginNavToggle] = useState(false)
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