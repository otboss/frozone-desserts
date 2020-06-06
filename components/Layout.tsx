
import React, { Component, useState } from 'react';
import Head from 'next/head';
import Header from './Header';



export const SearchQueryContext: React.Context<string> = React.createContext("");

const Layout = (props) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            {/* 
            // @ts-ignore */}
            <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
                <Header />
                {props.children}
                {searchQuery}
            </SearchQueryContext.Provider>
        </div>
    );
}


export default Layout;