import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';

const OuterDiv = styled.div`
    text-align: center;
    width: 100%;
    padding: 10px;
`;

const InnerDiv = styled.div`
    display: inline-block;
`;

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

class PopularCards extends Component {
    render(){
        return(
            <OuterDiv>
                <InnerDiv>
                    <FlexBox>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </FlexBox> 
                </InnerDiv>                   
            </OuterDiv>
        );
    }
}

export default PopularCards;