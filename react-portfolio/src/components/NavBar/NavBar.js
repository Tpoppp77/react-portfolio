import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (

        <nav className=" navbar navbar-center navbar-expand-lg navbar-dark navbar-expand-md py-4 bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navbar-center">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link"  ><h5>Home</h5></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about"><h5>About</h5></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio"><h5>Portfolio</h5></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact"><h5>Contact</h5></NavLink>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default NavBar