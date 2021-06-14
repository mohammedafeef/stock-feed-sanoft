import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddStock from './componentsHelper/AddStock';
import {db} from '../firebase';
import { useHistory } from "react-router-dom";
function StockList() {
    const [addSec,setAddSec] = useState(false);
    const [stocks,setStocks] = useState([]);
    const history = useHistory();
    const swithAddSec = ()=>{
        setAddSec((state)=>state?false:true)
    }
    const getAllStock = ()=>{
        db.collection('stocks').onSnapshot((snapshot)=>{
            let tempStocks = [];
            // console.log(snapshot)
            tempStocks = snapshot.docs
            .filter((doc)=> doc.data().owner == localStorage.getItem('username'));
            tempStocks = tempStocks
            .map((doc)=>{
                return {
                    id:doc.id,
                    owner:doc.data().owner,
                    name:doc.data().name,
                    stock:doc.data().stock,
                    qty:doc.data().qty,
                    price:doc.data().price
                }
            });
            // console.log(tempStocks);
            setStocks(tempStocks);
        })
    }
    const signoutUser = async()=>{
        await localStorage.removeItem('logedIn');
        await localStorage.removeItem('username');
        history.push('/login');
    }
    useEffect(() => getAllStock(), []);
    return (
        <StockSection>
            <StockTable>
                <StockHeader>
                    <div className="profile">
                        <i class="bi bi-person-circle"></i>
                        <h6 className="h5">{localStorage.getItem('username')}</h6>
                    </div>
                    <button className="btn" onClick={signoutUser}>signout</button>
                </StockHeader>
                <div className="stockTable">
                <table className="table table-striped">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Item</th>
                            <th>QTY</th>
                            <th>Stock</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks.map((stock)=>(
                                <tr>
                                    <th>{stock.name}</th>
                                    <th>{stock.qty}</th>
                                    <th>{stock.stock}</th>
                                    <th>{stock.price}</th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                </div>
            </StockTable>
            <AddIcon onClick={swithAddSec}><i class="bi bi-plus-lg"></i></AddIcon>
            <StockAddmenu state={addSec} >
                <AddStock swithAddSec={swithAddSec}/>
            </StockAddmenu>
        </StockSection>
    )
}
const StockSection = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const StockTable = styled.div`
    width:100%;
    height:100%;
    position:relative;
    .stockTable{
        padding:1rem 2rem;
    }
    @media screen and (max-width:600px){
        padding:3rem 1rem 0;
    }
`
const StockHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    padding:0 1rem;
    background-color:rgba(0,0,0,.1);
    .profile{
        display:flex;
        align-items:center;
        h6{
            margin-left:.5rem;
        }
        i{
            font-size:1.5rem;

        }
    }
    button{
        font-size:1.2rem;
        font-weight:500;
        color:rgba(38,125,255,1);
        padding:.5rem;
        :hover{
            color:rgba(38,125,255,.5);
        }
        :active,:focus{
            border:none;
            box-shadow:none;
        }
    }

`
const AddIcon = styled.div`
    position:absolute;
    bottom:3rem;
    right:2rem;
    width:3rem;
    height:3rem;
    border-radius:50%;
    background-color:blue;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 6px 12px rgba(0,0,0,.21),
                0 8px 15px rgba(0,0,0,.15);
    transition:.5s;
    i{
        color:white;
        font-size:1.2rem;
        transition:.8s;
    }
    :hover{
        box-shadow:0 10px 12px rgba(0,0,0,.21),
                0 20px 25px rgba(0,0,0,.15);
        i{
            transform:rotate(45deg);
        }
    }
`
const StockAddmenu = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:${props => (props.state ? "flex":"none")};
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.4);
`
export default StockList
