import React from 'react';
import SimpleCard from './styles/SimpleCard';
import { IceCream } from '../misc/IceCream';
import { Cart } from '../pages/cart';
import { Theme } from './styles/Theme';

/**
 * Renders a card containing the ice cream cone
 * @param {*} coneName 
 * @param {*} image 
 * */
export const Card = function (iceCream: IceCream): JSX.Element {
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
                <div style={{ backgroundColor: Theme.brightBlue, color: 'white', height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <span>ADD</span>
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
}

const addToCard = function (iceCream: IceCream): void {
    Cart.cart.push(iceCream);
    console.log(Cart.cart);
}