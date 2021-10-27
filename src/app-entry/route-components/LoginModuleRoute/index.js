import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {auth} from '../../../Firestore/Config'
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

export const LoginModuleRoute = (props) => {
    
    const [user, setUser] = useState({});
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
    
    const login = async () => {
        try {const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);}
        catch (error){console.log(error)}
    }
    
    const logout = async () => {await signOut(auth);}
  
    return (
        <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={(e)=>{setLoginEmail(e.target.value)}}
                />
            </FormGroup>
    
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={(e)=>{setLoginPassword(e.target.value)}}
                />
            </FormGroup>
            <h4>Current User: {user?.email}</h4>
            <Button onClick={login}>Submit</Button>
            <Button onClick={logout}>Logout</Button>
        </Form>
    );
}