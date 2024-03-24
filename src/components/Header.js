import React from "react";
import logo from  './assets/logoimage.png';

const Header = () =>{
    return(
        <div>
            <h1>Little lemon</h1>
            <img src={logo} width={100} height={30} alt=""/>
        </div>
        
    )
}
export default Header;