import React from "react";

const About = () => {
    return (

        <>
            <div className="header">
                <div className="container">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <br></br>
                            <br></br>
                            <br></br>
                            <img src={process.env.PUBLIC_URL +"/images/IMG_4496.png"} height="600" width="400" alt="ME"></img>
                        </div>

                        <div className="card-body text-center">
                            <h3 className="card-text text-danger">Thomas Christopher Popp-Olson</h3>
                            <hr></hr>

                            <h4> Full Stack Web Engineer</h4>

                            <p>I am an outgoing, outspoken person who is motivated and determined to get the job done. I like to go on adventures and enjoy the arizona heat. I have the ability to juggle multiple tasks with an attention to detail. I dont have any expierence with web development but I like technology and am interested how its works and how its put together.</p>

                            <h6>Phone Number: 480-290-3461</h6>
                            <h6>Email: Tpopp77@gmail.com</h6>



                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className="text-danger text-center font-weight-bold">About Me</h1> */}

            <div id="div2" className="card bg-gradient-dark">
                <div className="row">
                    <div className="col-sm-12 text-center">
                    </div>

                    <div className="col-sm-12 text-center">
                        <h1 className="text-center"><span className="border-bottom border-danger">SKILLS</span></h1>
                        <br></br>
                        <div className="row">

                            <div className="col">
                                <div className="list border border-danger">
                                    <h5 className="text-center"><u>Databases</u></h5>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="list border border-warning">
                                    <h5 className="text-center"><u>Browser Based</u></h5>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="list border border-danger">
                                    <h5 className="text-center"><u>Deployment with CLI</u></h5>
                                    <ul>
                                        <li>Git</li>
                                        <li>Github Pages</li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;