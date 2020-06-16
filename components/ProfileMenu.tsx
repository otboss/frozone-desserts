import styled from 'styled-components';
import React from "react";
import { Theme } from "./styles/Theme";

const ProfileMenuStyle = styled.div`
    position: fixed;
    min-width: 200px;
    min-height: 140px;
    background-color: white;
    top: 60px;
    right: 10px;
    z-index: 3;
    padding: 10px;
    border: 1px solid lightgray;
    display: none;
    input{
        margin: 0 0 10px 0;
    }
    button{
        width: 100%;
        cursor: pointer;
        background-color: ${Theme.accentColor};
        color: white;
        border: none;
        padding: 10px 0;
    }
`;

/**
 * Stores contexts globally for use throughout the app
 * */
const ProfileMenu = (props) => {
    return (
        <ProfileMenuStyle id="profileMenuDiv">
            <form onSubmit={e => {
                e.preventDefault();
                // TODO: Implement sign in
            }}>
                <div>
                    <input placeholder="email" />
                </div>
                <div>
                    <input placeholder="password" />
                </div>
                <button type="submit">
                    <span>Sign In</span>
                </button>
            </form>
        </ProfileMenuStyle>
    );
}

export default ProfileMenu;
export const toggleProfileMenu = function (toggle?: boolean) {
    if (typeof (toggle) != "undefined") {
        if (toggle) {
            document.getElementById("profileMenuDiv").style.display = "block";
            return;
        }
        document.getElementById("profileMenuDiv").style.display = "none";
        return;
    }
    if (document.getElementById("profileMenuDiv").style.display == "" || document.getElementById("profileMenuDiv").style.display == "none") {
        document.getElementById("profileMenuDiv").style.display = "block";
        return;
    }
    document.getElementById("profileMenuDiv").style.display = "none";
}
