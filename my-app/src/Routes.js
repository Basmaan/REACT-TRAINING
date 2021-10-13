import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './LoginPage/Login';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={signUp} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    )
}
const signUp = () => {
    return (
        <div>
            signup
        </div>
    )
}

export default Routes

