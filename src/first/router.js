
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import App from './app';
import Home from './home';
import Ios from './ios';
import Android from './android';

class RouteConfig extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flags: null
        }
    }
    componentWillMount() {
        
    }

    render() {

        return (
            <Router>
                <App >
                    <Route exact path="/" component={Home} />
                    <Route path="/ios" component={Ios} />
                    <Route path='/android' component={Android} />
                </App>
            </Router>
        )
    }
}

export default RouteConfig;
