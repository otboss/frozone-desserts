import React, { Component } from 'react';
import Theme from './styles/Theme';
import styled from 'styled-components';
import Link from 'next/link';

const CartButton = styled.button`
    border: none;
    color: ${Theme.accentColor};
    background-color: transparent;
    font-size: 20px;
    img {
        width: 25px;
    }
`;


class Header extends Component {
    render(){
        return(
            <div style={{ width: '100%'}}>
                <header style={{ width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center', height: '100%', width: '100%', flexWrap: 'wrap', flexDirection: 'row'}}>
                        <div style={{width: '0', flex: '0'}}>
                            <img style={{width: '120px'}} src="/cream-truck.png"/>
                        </div>
                        <div style={{width: '0', flex: '0'}}>
                            <span style={{transform: 'skew(-7deg)', color: Theme.accentColor, fontSize: '20px'}}>Frozone</span>
                        </div>
                        <div style={{width: '100%', flex: '1', textAlign: 'right'}}>
                            <Link href="/cart">
                                <a>
                                    <CartButton>
                                        <div style={{display:'table', height: '100%', width: '100%'}}>
                                            <div style={{display: 'table-cell', width: '0', verticalAlign: 'middle' }}>
                                                <img src="/cart.png"/>
                                            </div>
                                            <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle' }}>
                                                <span>Cart</span>
                                            </div>
                                        </div>
                                    </CartButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                </header>
                <div style={{backgroundColor: Theme.primaryColor, height: '10px'}}>

                </div>
            </div>
        );
    }
}

export default Header;