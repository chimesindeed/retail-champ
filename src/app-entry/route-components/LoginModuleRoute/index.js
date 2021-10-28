import React, {useState} from 'react';
import {Button, Form, Label, Input} from 'reactstrap';
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../../../Firebase/firebaseConfig'

export const LoginModuleRoute = (props) => {
    
    const [user, setUser] = useState({});
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    
    const login = async () => {
        try {const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);}
        catch (error){console.log(error)}
    }
    
    const logout = async () => {await signOut(auth);}
  
    return (
        <Form className="login-form">
            <Label for="email">Email</Label>
            <Input 
                className="login-input"
                type="email"
                id="email"
                placeholder="email"
                onChange={(e)=>{setLoginEmail(e.target.value)}}
            />
            
            <Label for="password">Password</Label>
            <Input
                className="login-input"
                type="password"
                id="password"
                placeholder="password"
                onChange={(e)=>{setLoginPassword(e.target.value)}}
            />

            <h4>Current User: {user?.email}</h4>
            <Button onClick={login}>Submit</Button>
            <Button onClick={logout}>Logout</Button>
        </Form>
    );
}