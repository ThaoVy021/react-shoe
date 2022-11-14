import React from "react";
import './Header.styles.css'

export default function Header() {
    return (
        <div className="header">
            <img src={require('../../../assets/imgs/puma.png')} width="70" height="40" alt="Puma" />
            <div className="header_infor">
                <a href="/#">Find a Store</a><div> | </div>
                <a href="/#">Help </a><div> | </div>
                <a href="/#">Join Us </a><div> | </div>
                <a href="/#">Sign In</a>
            </div>
        </div>
    )
}