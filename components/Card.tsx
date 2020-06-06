import React, { Component } from 'react';
import SimpleCard from './styles/SimpleCard';
import { IceCream } from '../misc/IceCream';
import Cart from '../pages/cart';
import { Theme } from './styles/Theme';




export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SimpleCard>
                <div style={{ flex: '2', position: 'relative', textAlign: 'center' }}>
                    {
                        // @ts-ignore
                        typeof (this.props.iceCream.image) == "undefined" ?
                            (
                                <div style={{ textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '100%', textAlign: 'center', color: 'lightgray' }}>
                                        <span>NO IMAGE</span>
                                    </div>
                                </div>
                            ) :
                            // @ts-ignore
                            this.props.iceCream.image != "" ?
                                (
                                    // @ts-ignore
                                    <img src={this.props.iceCream.image} style={{ position: 'absolute', left: '50%', marginLeft: '-38px', height: '100%', width: 'calc(100% - 70px)' }} alt="NO IMAGE" />
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
                    {
                        // @ts-ignore
                        this.props.iceCream.name
                    }
                    <br />
                ${
                        // @ts-ignore
                        this.props.iceCream.cost
                    }
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
}


// const addToCart = function (iceCream: IceCream) {
//     Cart.state.cart.push(iceCream);
//     this.setState({
//         cart: Cart.state.cart
//     });
// }





// /**
//  * Renders a card containing the ice cream cone
//  * @param {*} coneName 
//  * @param {*} image 
//  * */
// export const Card = function (iceCream: IceCream): JSX.Element {
//     return (
//         <SimpleCard>
//             <div style={{ flex: '2', position: 'relative', textAlign: 'center' }}>
//                 {
//                     typeof (this.props.iceCream.image) == "undefined" ?
//                         (
//                             <div style={{ textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
//                                 <div style={{ width: '100%', textAlign: 'center', color: 'lightgray' }}>
//                                     <span>NO IMAGE</span>
//                                 </div>
//                             </div>
//                         ) :
//                         this.props.iceCream.image != "" ?
//                             (
//                                 <img src={this.props.iceCream.image} style={{ position: 'absolute', left: '50%', marginLeft: '-38px', height: '100%', width: 'calc(100% - 70px)' }} alt="NO IMAGE" />
//                             ) :
//                             (
//                                 <div style={{ textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
//                                     <div style={{ width: '100%', textAlign: 'center', color: 'lightgray' }}>
//                                         <span>NO IMAGE</span>
//                                     </div>
//                                 </div>
//                             )
//                 }
//             </div>
//             <div style={{ flex: '1.5', padding: '5px' }}>
//                 {this.props.iceCream.name}
//                 <br />
//                 ${this.props.iceCream.cost}
//             </div>
//             <div style={{ flex: '1' }}>
//                 <div style={{ backgroundColor: Theme.brightBlue, color: 'white', height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
//                     <div style={{ textAlign: 'center', width: '100%' }}>
//                         <span>ADD</span>
//                     </div>
//                 </div>
//             </div>
//         </SimpleCard>
//     );
// }