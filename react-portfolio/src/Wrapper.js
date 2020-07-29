import React from "react";
import ProjectsCard from "./components/Projects/Projects"
import projects from "./Projects.json"
import Container from "./components/Container/Container"

class Wrapper extends React.Component {
    state = {
        projects
    };

    render() {
        return (
            <>
                <div className="header">
                    <div className="overlay">
                        <img src="./images/sunset.jpg" height="900" width="1900"
                            alt="background"></img>
                    </div>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100">
                                <h1 className="text-danger font-weight-bold">My React Portfolio</h1>
                                <h5 className="text-dark font-weight-bold">View my projects below</h5>


                            </div>
                        </div>
                    </div>
                </div>
                <Container>

                    <div className="row text-center">
                        {this.state.projects.map(project => (
                            <ProjectsCard
                                id={project.id}
                                key={project.id}
                                name={project.name}
                                image={project.image}
                                github={project.github}
                                deployed={project.deployed}
                            />

                        ))}

                    </div>
                </Container>
            </>
        )
    }
}

export default Wrapper