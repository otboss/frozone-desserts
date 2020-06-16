import React, { Component } from 'react';
import SimpleCard from './styles/SimpleCard';
import { Theme } from './styles/Theme';
import styled from 'styled-components';
import { IceCream } from '../misc/IceCream';
import Cart from '../pages/cart';
import * as globalCart from '../misc/Cart';


const AddButton = styled.div`
    color: ${Theme.brightBlue};
    border-top: 1px solid ${Theme.brightBlue};
    &:hover{
        transition: background-color 0.5s ease;    
        color: white;
        background-color: ${Theme.brightBlue};
    }
`;

const Card = (props) => {
    const iceCream: IceCream = props.iceCream;

    const addToCart = function () {
        globalCart.Cart.cartItems.push(iceCream);
        console.log(globalCart.Cart.cartItems);
    }


    return (
        <SimpleCard>
            <div style={{ flex: '2', position: 'relative', textAlign: 'center' }}>
                {
                    typeof (iceCream.image) == "undefined" ?
                        (
                            <div style={{ textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '100%', textAlign: 'center', color: 'lightgray' }}>
                                    <span>NO IMAGE</span>
                                </div>
                            </div>
                        ) :
                        iceCream.image != "" ?
                            (
                                <img src={iceCream.image} style={{ position: 'absolute', left: '50%', marginLeft: '-38px', height: '100%', width: 'calc(100% - 70px)' }} alt="NO IMAGE" />
                            ) :
                            (
                                <div style={{ textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '100%', textAlign: 'center', color: 'lightgray' }}>
                                        <span>NO IMAGE</span>
                                    </div>
                                </div>
                            )
                }
            </div>
            <div style={{ flex: '1.5', padding: '5px' }}>
                {iceCream.name}
                <br />
                ${iceCream.cost}
            </div>
            <div style={{ flex: '1' }}>
                <AddButton onClick={(e) => { addToCart() }} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <span>ADD</span>
                    </div>
                </AddButton>
            </div>
        </SimpleCard>
    );
}

export default Card;