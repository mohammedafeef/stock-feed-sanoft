import React, { useState } from 'react';
import styled from 'styled-components';
import Describtion from './componentsHelper/Describtion';
import {Link} from 'react-router-dom';
function Register() {
    const [user,setUser] = useState({
        username:'',
        name:'',
        email:'',
        password:''
    });
    const updateUser = (e) =>{
        setUser((old)=>{
            return{
                ...old,
                [e.target.name]:e.target.value
            }
        });
    }
    const createUser = (e) =>{
        e.preventDefault()
        console.log('authenticating the user')
        console.log(user);
        setUser({
            username:'',
            name:'',
            email:'',
            password:''
        });
    }
    return (
        <div className=" w-100 h-100 row p-0 m-0" >
            <Describtion/>
            <RegisterSection className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
                <Tittle className="h1">Register here</Tittle>
                <RegisterPart onSubmit={createUser} className="form-group d-flex flex-column">
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter name" 
                    value={user.name} 
                    onChange={updateUser} 
                    required="true"/>

                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter username" 
                    value={user.username} 
                    onChange={updateUser} 
                    required="true"/>

                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    value={user.email} 
                    onChange={updateUser} 
                    required="true"/>

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                    value={user.password} 
                    onChange={updateUser} 
                    required="true"/>

                    <button type="submit" className="btn btn-primary">Register</button>
                </RegisterPart>
                <Login className="h5">If you have an account <strong><Link to="/login" >Login</Link></strong></Login>
            </RegisterSection>
        </div>
    )
}

const Tittle = styled.h2`
    position:relative;
    margin-bottom:5rem;
    text-align:center;
    ::before{
        content:'';
        position:absolute;
        bottom:-18px;
        left:50%;
        transform:translateX(-50%);
        width:50%;
        height:4px;
        border-radius:5px;
        background-color:rgba(38,125,255,255);
    }
`
const RegisterSection = styled.div`
    postision:relative;
    overflow:hidden;
    ${'' /* ::before{
        content:'';
        overflow:hidden;
        position:absolute;
        top:3rem;
        right:-8rem;
        width:12rem;
        height:10rem;
        border:2.5rem solid rgba(0,0,0,.18);
        border-radius:50%;
    } */}
`
const RegisterPart = styled.form`
    input{
        outline:none;
        border:none;
        border-bottom:2px solid lightgray;
        color:black;
        font-size:1.5rem;
        margin-bottom:1rem;
        padding-bottom:.5rem;
        :focus-within{
            border-bottom:2px solid rgba(0,0,0,.5);
        }
    }
    button{
        margin:3rem 0 1rem;
        text-transform:capitalize;
        font-weight:400;
        border-radius:30px;
        font-size:2rem;
    }
`
const Login = styled.p`
    color:lightgray;
    a{
        text-decoration:none;
        color:rgba(0,0,0,.65);
        :hover{
            border-bottom:1.5px solid rgba(0,0,0,.65);
        }
    }


`
export default Register;
