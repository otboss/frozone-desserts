import React, { useContext } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { IceCream } from '../misc/IceCream';
import { CartItemsContext } from './Layout';

const OuterDiv = styled.div`
    width: 100%;
    padding: 10px;
    @media (max-width: 700px) {
        text-align: center;
    }
    @media (min-width: 700px) {
        padding: 0 40px;
    }
`;

const InnerDiv = styled.div`
    display: inline-block;
`;

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 700px) {
        justify-content: center; 
    }
    @media (min-width: 700px) {
        justify-content: left;
    }  
`;


export let reloadCardItems = function () { };

const Cart = (props) => {
    //@ts-ignore
    const [cartItems, setCartItems] = useContext(CartItemsContext);

    return (
        <OuterDiv>
            <InnerDiv>
                <FlexBox>
                    {
                        JSON.stringify(cartItems)
                    }
                    {
                        cartItems.map(function (cartItem: IceCream) {
                            return (
                                <div>
                                    <Card iceCream={
                                        new IceCream(
                                            cartItem.name,
                                            cartItem.cost,
                                            cartItem.toppings,
                                            cartItem.image,
                                            cartItem.rating
                                        )
                                    } ></Card>
                                </div>
                            )
                        })
                    }
                </FlexBox>
            </InnerDiv>
        </OuterDiv>
    );
}

export default Cart;