import React from 'react';
import {
    isMobile
} from '../../utils';

class Android extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flags: null
        }
    }
    componentWillMount(){
        const flags = isMobile();
        this.setState({flags});
    }

    render(){
        const {
            flags
        } = this.state;
        
        return(
            <div>
                AndroidPage....
            </div>
        )
    }
}

export default Android;