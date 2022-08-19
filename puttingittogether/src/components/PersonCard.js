import React, { Component } from 'react';
    
    
class  PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        const {fname,lname,hcolor} = this.props
        return(
            <div>
                <h1>{fname}{lname}</h1>
                <p>age: {this.state.age}</p>
                <p>Hair Color: {hcolor}</p>
                <button onClick={ () => { this.setState({ age: this.state.age+1}) } }>Birhday Button for {fname}{lname} </button>
            </div>
        );
    }
}
    
export default PersonCard;