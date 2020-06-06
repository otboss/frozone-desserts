
import React from 'react';
import SimpleCard from './styles/SimpleCard';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header';


const Layout = (props) => (
    <div>
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
    </div>
)

export default Layout;