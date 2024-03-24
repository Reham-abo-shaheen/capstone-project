import React from "react";
import logofooter from './assets/Logo.svg';

const Footer = () => {
    return (
        <div>

            <img src={logofooter} width={200} height={80} alt="" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Reservation</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a class="login" href="/">Login</a></li>

            </ul>
        </div>
    )
}
export default Footer;