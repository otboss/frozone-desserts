import { Component, useState } from "react";
import styled from 'styled-components';
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "../misc/ApolloClient";



const GlobalStyles = styled.html`
a{
    text-decoration: none;
    color: inherit;
}
`;

/**
 * Stores contexts globally for use throughout the app
 * */
const GlobalContext = (props) => {

    return (
        <ApolloProvider client={ApolloClient}>
            <GlobalStyles>
                {props.children}
            </GlobalStyles>
        </ApolloProvider>
    );
}

export default GlobalContext;