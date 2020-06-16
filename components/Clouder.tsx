import styled from 'styled-components';
import React from "react";
import { toggleProfileMenu } from './ProfileMenu';


const ClouderStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    z-index: 2;
    display: none;
`;

/**
 * Stores contexts globally for use throughout the app
 * */
const Clouder = (props) => {
    return (
        <ClouderStyle id="clouderDiv" onClick={e => { toggleClouder(false) }}>
        </ClouderStyle>
    );
}


export default Clouder;
export const toggleClouder = function (toggle?: boolean) {
    if (typeof (toggle) != "undefined") {
        if (toggle) {
            document.getElementById("clouderDiv").style.display = "block";
            return;
        }
        document.getElementById("clouderDiv").style.display = "none";
        toggleProfileMenu(false);
        return;
    }
    if (document.getElementById("clouderDiv").style.display == "" || document.getElementById("clouderDiv").style.display == "none") {
        document.getElementById("clouderDiv").style.display = "block";
        return;
    }
    document.getElementById("clouderDiv").style.display = "none";
    toggleProfileMenu(false);
}