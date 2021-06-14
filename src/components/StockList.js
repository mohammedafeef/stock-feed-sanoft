import React, { useState } from 'react';
import styled from 'styled-components';
import AddStock from './componentsHelper/AddStock';

function StockList() {
    const [addSec,setAddSec] = useState(false);
    const swithAddSec = ()=>{
        setAddSec((state)=>state?false:true)
    }
    return (
        <StockSection>
            <StockTable>
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
                        <tr>
                            <th>Apple</th>
                            <th>2kg</th>
                            <th>10kg</th>
                            <th>80</th>
                        </tr>
                        <tr>
                            <th>Apple</th>
                            <th>2kg</th>
                            <th>10kg</th>
                            <th>80</th>
                        </tr>
                        <tr>
                            <th>Apple</th>
                            <th>2kg</th>
                            <th>10kg</th>
                            <th>80</th>
                        </tr>

                    </tbody>
                </table>
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
    padding:3rem;
    position:relative;
    @media screen and (max-width:600px){
        padding:3rem 1rem 0;
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
