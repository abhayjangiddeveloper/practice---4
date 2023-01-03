import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const logo = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 store_logo">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
)


const Navbar = () => {
    const [open_buttonhandler, setOpen_buttonhandler] = useState(true)

    const open_button = () => {
        setOpen_buttonhandler(!open_buttonhandler);
        // document.getElementsByClassName('menu_open_button').style = className = 'active';
    }

    return (
        <>
            <nav className="nav_bar">
                <div className="logo">
                    <NavLink className= "logo_link" to='/'>
                        SmartUV
                    </NavLink>

                </div>
                <div className={open_buttonhandler ? "mobile-size links" : "mobile-size"}>
                    <ul><li><NavLink to="/">home</NavLink></li></ul>
                    <ul><li><NavLink to="">products</NavLink></li></ul>
                    <ul><li><NavLink to="">how it works</NavLink></li></ul>
                    <ul><li><NavLink to="">blog</NavLink></li></ul>
                    {logo}
                </div>
                <div className="menu_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 menu_open_button active" onClick={open_button}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 menu_close_button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;