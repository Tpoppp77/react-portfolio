import React from "react";
import Links from "../Links/Links"
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="header">
                <div className="overlay"></div>

                <img src="./images/contact.jpg" alt="Mail, Phone, @"></img>

                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white text-center">
                            <h1 className="text-dark font-weight-bold">Contact Me
                            </h1>
                            <hr></hr>
                            <h1 className="text-primary font-weight-bold">Cell Phone: 480-290-3461</h1>
                            <br></br>
                            <h1 className="text-light font-weight-bold">Email: Tpopp77@gmail.com</h1>
                        </div>
                        <Links />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact