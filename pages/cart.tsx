
import Layout from '../components/Layout';
import { Component } from 'react';
import { IceCream } from '../misc/IceCream';
export const cardItems = [];

export class Cart extends Component {
    public static cart: Array<IceCream> = [];

    render() {
        return (
            <Layout>
                {/* <PopularCards></PopularCards> */}
            </Layout >
        )
    };
}