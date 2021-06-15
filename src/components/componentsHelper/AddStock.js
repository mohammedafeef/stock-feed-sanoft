import React, { useState } from 'react'
import styled from 'styled-components';
import {db} from '../../firebase';
import { v1 as uuidv1 } from 'uuid';
function AddStock({swithAddSec}) {
    const [item,setItem] = useState({
        owner:localStorage.getItem('username'),
        name:'',
        stock:'',
        qty:'',
        price:''
    })
    const updateItem = (e) =>{
        setItem((old)=>{
            return{
                ...old,
                [e.target.name]:e.target.value
            }
        });
    }
    const addItem = (e)=>{
        // To prevent the default form action
        e.preventDefault();
        console.log(item);
        db.collection('stocks').doc(uuidv1()).set(item);
        swithAddSec();
        setItem({
            owner:localStorage.getItem('username'),
            name:'',
            stock:'',
            qty:'',
            price:''
        })
    }
    return (
        <Container>
            <HeadBar className="bg-primary">
                <button onClick={swithAddSec} className="backBtn">
                    <i  class="bi bi-arrow-left-short"></i>
                </button>
                <h3 className="h4">Items Add</h3>
            </HeadBar>
            <AddForm onSubmit={addItem} class="form-group">
                    <div className="row">
                        <div className="col-sm-6 input-field">
                        <input 
                        type="text"
                        name="name" 
                        value={item.name} 
                        onChange={updateItem} 
                        required="true"/>
                        <label>Item</label>
                        </div>
                        <div className="col-sm-6 input-field">
                        <input 
                        type="text"
                        name="stock" 
                        value={item.stock} 
                        onChange={updateItem} 
                        required="true"/>
                        <label>stock</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 input-field">
                        <input 
                        type="text" 
                        name="qty" 
                        value={item.qty} 
                        onChange={updateItem} 
                        required="true"/>
                        <label>QTY</label>
                        </div>
                        <div className="col-sm-6 input-field">
                        <input 
                        type="number" 
                        name="price" 
                        value={item.price} 
                        onChange={updateItem} 
                        required="true"/>
                        <label>Price</label>
                        </div>
                    </div>
                    <div className="btnSection">
                        <button className='btn' onClick={swithAddSec}>cancel</button>
                        <button type="submit" className="btn">create</button>
                    </div>
            </AddForm>
        </Container>
    )
}
const Container = styled.div`
    width:80%;
    height:auto;
    background-color:white;
    max-width:580px;
`
const HeadBar = styled.div`
    width:100%;
    color:white;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:0 .3rem;
    .backBtn{
        background-color:transparent;
        color:white;
        border:none;
        outline:none;
        padding:none;
        i{
            font-size:1.8rem;
        }
    }
    h3{
        padding-left:.5rem;
        self-align:center;
        font-size:1.2rem;
        font-weight:500;
        transform:translateY(20%);
    }

`
const AddForm = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:.5rem .5rem;
    .btnSection{
        text-align:right;
        width:100%;
        button{
            font-size:1.5rem;
            font-weight:500;
            color:rgba(38,125,255,255);
            :active{
                outline:none;
            }
            :focus{
                box-shadow:none;
            }
        }
    }
    .row{
        margin:2.2rem 0 0;
        width:100%;
    }
    .input-field {
        ${'' /* margin:.5rem .3rem; */}
        position: relative;
        label {
            padding-left:2px;
            position: absolute;
            top: 0;
            left: 0;
            font-size:1.3rem;
            font-weight:600;
            transform:translateX(50%);
            color: #d3d3d3;
            transition: 0.2s all;
            cursor: pointer;
        }
        input {
            padding:0 .3rem;
            border: 2px solid rgba(0,0,0,.21);
            outline: 0;
            box-shadow: none;
            color: #111;
            font-size:1.3rem;
            :invalid {
                outline: 0;
            }
            :focus,:valid{

            }
            :focus~label,:valid~label{
                font-size:1.3rem;
                top:-33px;
                color:red;
            }
        }

    }
    @media screen and (max-width:600px){
        .row{
            margin:0;
        }
        .input-field{
            margin-top:2rem;
            margin-bottom:.8rem;
        }
    }

`

export default AddStock;
