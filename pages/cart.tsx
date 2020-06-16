
import Layout, { CartItemCountContext } from '../components/Layout';
import { Component, useContext } from 'react';
import { IceCream } from '../misc/IceCream';
import GlobalContext from '../components/GlobalContext';
import * as cartComponent from '../components/Cart'

export class CartState {
    constructor(
        public cart: Array<IceCream> = []
    ) { }
}

export default class Cart extends Component {
    // public static cart: Array<IceCream> = [];
    public static state: CartState = new CartState();

    constructor(props) {
        super(props);
        this.state = Cart.state;
    }

    render() {
        return (
            <GlobalContext>
                <Layout>
                    <cartComponent.default></cartComponent.default>
                </Layout>
            </GlobalContext>
        )
    };
}