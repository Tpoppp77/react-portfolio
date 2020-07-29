import React from "react";
import "./Projects.css"


const Projects = (props) => {
    return (
        <>

            <br></br>


            <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                <img className="rounded" height="300px" width="350px" src={props.image} alt={props.name}></img>
                <div className="imgLink">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4> {props.name}</h4>
                    <p className="text-danger">{props.languages}</p>
                    <a href={props.github} className="btn btn-outline-primary">View Project</a>
                    <a href={props.deployed} className="btn btn-outline-primary">View Deployed</a>

                </div>

            </div>




            <br></br>


        </>
    )
}

export default Projects;