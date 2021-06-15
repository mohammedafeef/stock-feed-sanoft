import React, { useState } from 'react';
import styled from 'styled-components';
import Describtion from './componentsHelper/Describtion';
import {Link, useHistory} from 'react-router-dom';
import {db} from '../firebase';
function Register() {
    const [user,setUser] = useState({
        username:'',
        name:'',
        email:'',
        password:''
    });
    const [err,setErr] = useState({
        userExists:false,
        isNotStrong:false
    });
    const history = useHistory();
    const updateUser = (e) =>{
        setUser((old)=>{
            return{
                ...old,
                [e.target.name]:e.target.value
            }
        });
    }
    const createUser = async (e) =>{
        try{
            setErr({
                userExists:false,
                isNotStrong:false
            });
            e.preventDefault();
            console.log('authenticating the user');
            console.log(user);
            const userData = await db.collection('users').doc(user.username).get()
            if(userData.exists){
                setErr((old)=>{
                    return{
                        ...old,
                        userExists:true
                    }
                });
            }else{
                if(user.password.length <8){
                    setErr((old)=>{
                        return{
                            ...old,
                            isNotStrong:true
                        }
                    })
                }else{
                    db.collection('users').doc(user.username).set(user);
                    setUser({
                        username:'',
                        name:'',
                        email:'',
                        password:''
                    });
                    history.push('/login');
                }
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className=" w-100 h-100 row p-0 m-0" >
            <Describtion/>
            <RegisterSection className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
                <Tittle className="h1">Register here</Tittle>
                <RegisterPart 
                onSubmit={createUser} 
                className="form-group d-flex flex-column" 
                state={err.userExists} passState={err.isNotStrong}>
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
                    <p className="err">username already exists</p>


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
                    <p className="passErr">atleast 8characters long</p>

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
        font-size:1.4rem;
        margin-bottom:1rem;
        padding-bottom:.5rem;
        :focus-within{
            border-bottom:2px solid rgba(0,0,0,.5);
        }
        :nth-child(2){
            margin-bottom:${props =>(props.state ? 0:1)}rem;
        }
        :nth-child(4){
            margin-bottom:${props =>(props.state ? 0:1)}rem;
        }
    }
    p{
        color:red;
        font-weight:500;
    }
    .err{
        display:${props => (props.state ? "flex":"none")};
    }
    .passErr{
        display:${props => (props.passState ? "flex":"none")};
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
