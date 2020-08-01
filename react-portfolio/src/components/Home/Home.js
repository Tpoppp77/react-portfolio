import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div id="home" className="header">
            <div className="overlay">
                <img src={process.env.PUBLIC_URL + "/assets/images/grand-canyon.jpg"}  height="900" width="1900" alt="grand canyon"></img>
            </div>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-black">
                        <h1 className="text-danger font-weight-bold">Thomas Olson
                        </h1>
                        <h2 className="text-dark font-weight-bold">Full-Stack Web Engineer</h2>
                        <Link to="/about" role="button" type="button" className="btn btn-warning mr-2">All Me</Link>
                        <Link to="/portfolio" role="button" type="button" className="btn btn-danger mr-2">Applications & Projects</Link>
                        <Link to="/contact" role="button" type="button" className="btn btn-dark">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;