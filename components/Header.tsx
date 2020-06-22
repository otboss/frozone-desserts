import React, { Component, useContext } from 'react';
import { Theme } from './styles/Theme';
import styled from 'styled-components';
import Link from 'next/link';
import { RouteMapper } from '../misc/RouteMapper';
import { AssetMapper } from '../misc/AssetMapper';
import { SearchQueryContext, CartItemCountContext } from './Layout';
import { toggleClouder } from './Clouder';
import { toggleProfileMenu } from './ProfileMenu';
import Cart from '../pages/cart';
import * as globalCart from '../misc/Cart';


const CartButton = styled.button`
    border: none;
    color: ${Theme.accentColor};
    background-color: transparent;
    font-size: 20px;
    img {
        width: 25px;
    }
`;

const Navigation = styled.div`
    flex: 1;
    margin: 8px 13px 0 0;
    nav {
        span {
            color: ${Theme.accentColor};
            font-size: 18px;
            cursor: pointer;
            padding-right: 13px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;


const Header = (props) => {
    //@ts-ignore
    const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
    //@ts-ignore
    const [cartItemCount, setCartItemCount] = useContext(CartItemCountContext);
    setCartItemCount(globalCart.Cart.cartItems.length);

    return (
        <div style={{ width: '100%' }}>
            <header style={{ width: '100%', height: '100px', padding: '0 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <div style={{ width: '0', flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Link href={RouteMapper.index}>
                            <a style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ width: '0', flex: '0' }}>
                                    <img style={{ width: '120px' }} src="/cream-truck.png" />
                                </div>
                                <div style={{ width: '0', flex: '0' }}>
                                    <span style={{ transform: 'skew(-7deg)', color: Theme.accentColor, fontSize: '20px' }}>Frozone</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div style={{ width: '100%', flex: '5', display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: '10' }}></div>
                        <Navigation style={{ flex: '1' }}>
                            <nav>
                                <Link href={RouteMapper.index}>
                                    <a>
                                        <span>Buy</span>
                                    </a>
                                </Link>
                                <Link href={RouteMapper.sell}>
                                    <a>
                                        <span>Sell</span>
                                    </a>
                                </Link>
                            </nav>
                        </Navigation>
                        <div style={{ flex: '1', textAlign: 'right' }}>
                            <input placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                        </div>
                        <div style={{ flex: '1.3', textAlign: 'right' }}>
                            <Link href={RouteMapper.cart}>
                                <a>
                                    <CartButton style={{ position: 'relative', margin: '2px 0 0 0' }}>
                                        <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flex: '0' }}>
                                                <img src={AssetMapper.cart} />
                                            </div>
                                            <div style={{ flex: '0', width: '100%' }}>
                                                <span>Cart</span>
                                            </div>
                                        </div>
                                        {
                                            cartItemCount > 0 ? (
                                                <div style={{ position: "absolute", top: '10px', left: '3px', fontSize: '12px', backgroundColor: 'red', color: 'white', borderRadius: '100px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    {cartItemCount}
                                                </div>
                                            ) : (
                                                    <div></div>
                                                )
                                        }
                                    </CartButton>
                                </a>
                            </Link>
                        </div>
                        <div style={{ flex: '0', width: '100%', padding: '0 10px 0 10px', cursor: 'pointer' }}>
                            <img src="/profile.png" style={{ margin: '0 0 0 0', width: '28px' }} onClick={e => { toggleClouder(); toggleProfileMenu(); }} />
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ backgroundColor: Theme.primaryColor, height: '10px' }}>

            </div>
        </div>
    );
}

export default Header;