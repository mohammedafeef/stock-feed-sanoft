import React from 'react';
import styled from 'styled-components';
import AddStock from './componentsHelper/AddStock';

function StockList() {
    return (
        <StockSection>
            <StockTable>

            </StockTable>
            <AddIcon></AddIcon>
            <StockAddmenu>
                <AddStock/>
            </StockAddmenu>
        </StockSection>
    )
}
const StockSection = styled.div`

`
const StockTable = styled.div`
    width:100%;
    height:100%;
`
const AddIcon = styled.div`

`
const StockAddmenu = styled.div`
    display:none;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.2);
`
export default StockList
