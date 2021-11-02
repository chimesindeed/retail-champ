import React, {useState, useContext} from 'react';
import {Button, Form, Input} from 'reactstrap';
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../../Firebase/firebaseConfig'
import {LoginBarToggle, CurrentUser} from '../DiscountsModule/Context/contextObjects'

export const LoginModule = (props) => {
    
    const [user, setUser] = useContext(CurrentUser);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [, setLoginNavToggle] = useContext(LoginBarToggle)
    
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    
    const closeLoginBar = (timeOut) => {
        setTimeout(()=>{setLoginNavToggle(false)}, timeOut)
    }
    
    const login = async () => {
        try {const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);}
        catch (error){console.log(error)}
        closeLoginBar(1000)
    }
    
    const logout = async () => {await signOut(auth); closeLoginBar(1000)}
  
    return (
        <Form className="login-form">
            <label className="email-label" for="email">email:</label>
            <Input 
                className="email-input"
                type="email"
                id="email"
                onChange={(e)=>{setLoginEmail(e.target.value)}}
            />
            
            <label className="password-label"for="password">password:</label>
            <Input
                className="password-input"
                type="password"
                id="password"
                onChange={(e)=>{setLoginPassword(e.target.value)}}
            />

            <Button className="login-button" onClick={login}>login</Button>
            <Button className="logout-button" onClick={logout}>logout</Button>
            {
                user?.email
                    ? <div className="current-user">logged in: {user?.email}</div>
                    : null
            }
        </Form>
    );
}