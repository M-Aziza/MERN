import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname,lname, email, password,cpassword };
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setCpassword("");
        console.log("Welcome", newUser);
    };
    
    return(

        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFname(e.target.value) }value={ fname }  />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLname(e.target.value) } value={ lname } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setCpassword(e.target.value) } value={ cpassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <table>
            <tbody>

            <tr>
                <td>First Name:</td>
                <td>{ fname }</td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>{ lname }</td>
            </tr>
            <tr>
                <td>Email Address:</td>
                <td>{ email }</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>{ password }</td>
            </tr>
            <tr>
                <td>Confirm Password</td>
                <td>{ cpassword }</td>
            </tr>
            </tbody>
        </table>
            </div>
    );
};
    
export default UserForm;
