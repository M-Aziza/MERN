import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [cpassword, setCpassword] = useState("");  
    const [cpasswordError, setCpasswordError] = useState("");  
    
    const handleFname= (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFnameError("First Name must be 2 characters or longer!");
        }else{
            setFnameError();
        }
    }
    const handleLname= (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLnameError("Last Name  must be 2 characters or longer!");
        }else{
            setLnameError();
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        }else{
            setEmailError();        }
    }
    const handlePassword= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }else{
            setPasswordError();
        }
        
    }
    
    const handleCpassword= (e) => {
        setCpassword(e.target.value);
        if(e.target.value.length < 1) {
            setCpasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 8) {
            setCpasswordError("Confirm Password must be 8 characters or longer!");
        }else if(e.target.value !== password ){
            setCpasswordError("Passwords must match ");
        }else{
            setCpasswordError();
        }
    
    }

    return(

        <div>
        <form onSubmit={ (e) => e.preventDefault()}>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFname }/>
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLname} />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail }  />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label> Password: </label>
                <input type="password" onChange={ handlePassword }   />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleCpassword }   />
                {
                    cpasswordError ?
                    <p style={{color:'red'}}>{ cpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
            </div>
    );
};
    
export default UserForm;