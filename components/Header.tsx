import React, { Component } from 'react';
import { Theme } from './styles/Theme';
import styled from 'styled-components';
import Link from 'next/link';
import { RouteMapper } from '../misc/RouteMapper';
import { AssetMapper } from '../misc/AssetMapper';
import { PopularSelections } from './PopularSelections';

const CartButton = styled.button`
    border: none;
    color: ${Theme.accentColor};
    background-color: transparent;
    font-size: 20px;
    img {
        width: 25px;
    }
`;

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { searchQuery: '' };
    }

    private static searchQuery: string = "";

    public updateSearchQuery = async (event: any) => {
        Header.searchQuery = event.target.value;
        this.setState({ searchQuery: event.target.value });
        event.preventDefault();
    }

    public static getSearchQuery(): string {
        return Header.searchQuery;
    }


    render() {
        return (
            <div style={{ width: '100%' }}>
                <header style={{ width: '100%', padding: '0 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
                        <div style={{ width: '0', flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ width: '0', flex: '0' }}>
                                <img style={{ width: '120px' }} src="/cream-truck.png" />
                            </div>
                            <div style={{ width: '0', flex: '0' }}>
                                <span style={{ transform: 'skew(-7deg)', color: Theme.accentColor, fontSize: '20px' }}>Frozone</span>
                            </div>
                        </div>
                        <div style={{ width: '100%', flex: '5', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ flex: '10' }}></div>
                            <div style={{ flex: '1', textAlign: 'right' }}>
                                <input placeholder="Search" onChange={this.updateSearchQuery} />
                            </div>
                            <div style={{ flex: '1.3', textAlign: 'right' }}>
                                <Link href={RouteMapper.cart}>
                                    <a>
                                        <CartButton>
                                            <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', flex: '0' }}>
                                                    <img src={AssetMapper.cart} />
                                                </div>
                                                <div style={{ flex: '0', width: '100%' }}>
                                                    <span>Cart</span>
                                                </div>
                                            </div>
                                        </CartButton>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div style={{ backgroundColor: Theme.primaryColor, height: '10px' }}>

                </div>
            </div>
        );
    }
}