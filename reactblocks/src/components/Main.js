import React, { Component } from 'react';
import './Bolcks.css';
class Main extends Component{

    render(){
        return(
            <div className='red'>{this.props.children}</div>
        );

    }
}

export default Main;