import React from 'react'
import styled from 'styled-components';

function Describtion() {
    return (
        <Describe className="col-md-6 d-flex flex-column justify-content-center description ">
            <h2 className="h2">Welcome to sanoft</h2>
            <Line className="underline"/>
            <p className="h4 msg">
            sanoft Technologies is a software company whose primary products
            are various forms of software,software technology and software product development.
            </p>
            <KnowMore className="btn know-btn h-4">know more</KnowMore>
        </Describe>
    )
}
const Describe = styled.div`
    padding:0 11rem 0 2.5rem;
    color:white;
    background-color:rgba(38,125,255,255);
    position:relative;
    ::before{
        content:'';
        width:13rem;
        height:13rem;
        background:transparent;
        border:3rem solid white;
        border-radius:50%;
        position:absolute;
        bottom:3rem;
        right:-7rem;
    }
    overflow:hidden;
    @media screen and (max-width:800px){
        display:none !important;
    }
`
const Line = styled.div`
    width:20%;
    margin:1rem 0 2.8rem 0;
    background-color:white;
    border:2.5px solid rgba(255,255,255,255);
    border-radius:5px;
`
const KnowMore = styled.a`
    width:10rem;
    margin-top:2.8rem;
    padding:.7rem .8rem;
    color:white;
    font-size:1.2rem;
    font-weight:700;
    text-transform:capitalize;
    border:2px solid white;
    border-radius:20px;
    :hover{
        color:white;
    }
`
export default Describtion;
