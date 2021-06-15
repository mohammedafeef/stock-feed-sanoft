import React, { useState } from 'react';
import styled from 'styled-components';
import Describtion from './componentsHelper/Describtion';
import {Link, useHistory} from 'react-router-dom';
import {db} from '../firebase';
function Login() {
    const [user,setUser] = useState({
        username:'',
        password:''
    });
    const history = useHistory();
    const [invalidErr,setInvalidErr] = useState(false);
    const [invalidPass,setInvalidPass] = useState(false);
    const updateUser = (e) =>{
        setUser((old)=>{
            return{
                ...old,
                [e.target.name]:e.target.value
            }
        });
    }
    const authUser = async (e) =>{
        try{
            e.preventDefault();
            setInvalidErr(false);
            setInvalidPass(false);
            const getUser = await db.collection('users').doc(user.username).get();
            if(getUser.exists){
                if(getUser.data().password === user.password){
                    localStorage.setItem('username',user.username);
                    localStorage.setItem('logedIn','true');
                    setUser({
                        username:'',
                        password:''
                    })
                    history.push('/stock');
                    history.push('/stock');

                }else{
                    setInvalidPass(true);
                }

            }else{
                setInvalidErr(true);
            }
            console.log('authenticating the user')
            console.log(user);


        }catch(err){
            console.log(err);
        }

    }
    return (
        <div className=" w-100 h-100 row p-0 m-0" >
            <Describtion/>
            <LoginSection className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
                <Tittle className="h1">sign in</Tittle>
                <LoginPart 
                onSubmit={authUser}
                errState={invalidErr} 
                errPassState={invalidPass}
                className="form-group d-flex flex-column">
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter username" 
                    value={user.username} 
                    onChange={updateUser} 
                    required="true"/>
                    <p className="err">Invalid username</p>

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                    value={user.password} 
                    onChange={updateUser} 
                    required="true"/>
                    <p className="passErr">Invalid password</p>
                    <button type="submit" className="btn btn-primary">login</button>
                </LoginPart>
                <Register className="h5">Don't you have an accound ? <strong><Link to="/register" >Register Now</Link></strong></Register>
            </LoginSection>
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
        bottom:-13px;
        width:100%;
        height:4px;
        border-radius:5px;
        background-color:rgba(38,125,255,255);
    }
`
const LoginSection = styled.div`
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
const LoginPart = styled.form`
    input{
        outline:none;
        border:none;
        border-bottom:2px solid lightgray;
        color:black;
        font-size:1.3rem;
        padding-bottom:.5rem;
        :focus-within{
            border-bottom:2px solid rgba(0,0,0,.5);
        }
        :nth-child(1){
            margin-bottom:${props => (props.errState ? 0:2)}rem;
        }
        :nth-child(2){
            margin-bottom:${props => (props.errPassState ? 0:2)}rem;
        }
    }
    p{
        color:red;
        font-weight:500;
    }
    .err{
        display:${props => (props.errState ? "flex":"none")};
    }
    .passErr{
        display:${props => (props.errPassState ? "flex":"none")};
    }
    button{
        margin:3rem 0 1rem;
        text-transform:capitalize;
        font-weight:400;
        border-radius:30px;
        font-size:2rem;
    }
`
const Register = styled.p`
    color:lightgray;
    a{
        text-decoration:none;
        color:rgba(0,0,0,.65);
        :hover{
            border-bottom:1.5px solid rgba(0,0,0,.65);
        }
    }
    @media screen and (max-width:600px){
        font-size:1rem;
    }


`
export default Login
