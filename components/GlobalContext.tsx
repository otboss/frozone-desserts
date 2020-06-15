import { Component, useState } from "react";
import styled from 'styled-components';
import React from "react";



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
        <GlobalStyles>
            {props.children}
        </GlobalStyles>
    );
}

export default GlobalContext;