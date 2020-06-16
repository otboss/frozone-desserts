import { Component, useState } from "react";
import styled from 'styled-components';
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "../misc/ApolloClient";
import Clouder, { toggleClouder } from "./Clouder";
import ProfileMenu from "./ProfileMenu";


/**
 * Stores contexts globally for use throughout the app
 * */
const GlobalContext = (props) => {
    return (
        <ApolloProvider client={ApolloClient}>
            <style jsx global>{`
            a{
                text-decoration: none;
                color: inherit;
            }
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
            <Clouder />
            <ProfileMenu />
            <html>
                {props.children}
            </html>
        </ApolloProvider>
    );
}

export default GlobalContext;