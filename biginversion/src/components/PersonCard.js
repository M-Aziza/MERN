import React  from 'react';
    
    const PersonCard = props => {
    // render() {
    //     const {fname,lname,age,hcolor} = this.props
        return(
            <div>
                <h1>{props.fname}, {props.lname}</h1>
                <p>age: {props.age}</p>
                <p>Hair Color: {props.hcolor}</p>
            </div>
        );
    }
    
export default PersonCard;