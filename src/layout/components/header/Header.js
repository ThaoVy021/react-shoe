import React from "react";
import './Header.styles.css'

export default function Header() {
    return (
        <div className="header">
            <img src={require('../../../assets/imgs/puma.png')} width="50" height="25" />
            <div className="header_infor">
                <a href="#">Find a Store | </a>
                <a href="#">Help | </a>
                <a href="#">Join Us | </a>
                <a href="#">Sign In</a>
            </div>
        </div>
    )
}