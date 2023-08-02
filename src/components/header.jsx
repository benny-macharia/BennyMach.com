import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header>
                <Link className="site-logo" to={"/"}>BM</Link>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"projects"}>Code vault</NavLink>
                    <NavLink to={"bio"}>Bio</NavLink>
            </header>
        </>
    )
}