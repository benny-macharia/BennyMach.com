import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header>
                <Link className="site-logo" to={"/BennyMach.com/"}>BM</Link>
                    <NavLink to={"notes"}>Notes</NavLink>
                    <NavLink to={"projects"}>Code vault</NavLink>
                    <NavLink to={"quotes"}>Quotes</NavLink>
                    <NavLink to={"bio"}>Bio</NavLink>
            </header>
            <hr className="header-hr"/>
        </>
    )
}