import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import RouteConfig from './router';

class Root extends React.Component {
    constructor(props){
        super(props)
    }
   
    render() {
        
        return (
            <RouteConfig />
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));