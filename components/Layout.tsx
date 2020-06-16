
import React, { Component, useState } from 'react';
import Head from 'next/head';
import Header from './Header';



export const SearchQueryContext: React.Context<string> = React.createContext("");
export const CartItemCountContext: React.Context<string> = React.createContext("");

const Layout = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [cartItemCount, setCartItemCount] = useState("");

    return (
        <div>
            {/* 
            // @ts-ignore */}
            <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
                {/* 
            // @ts-ignore */}
                <CartItemCountContext.Provider value={[cartItemCount, setCartItemCount]}>
                    <Head>
                        <title>Create Next App</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Header />
                    {props.children}
                </CartItemCountContext.Provider>
            </SearchQueryContext.Provider>
        </div>
    );
}


export default Layout;