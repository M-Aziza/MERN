import React, { Component } from 'react';
    
    
class  PersonCard extends Component {
    render() {
         const {fname,lname,age,hcolor} = this.props
        return(
            <div>
                <h1>{fname}{lname}</h1>
                <p>age: {age}</p>
                <p>Hair Color: {hcolor}</p>
            </div>
        );
    }
}
    
export default PersonCard;