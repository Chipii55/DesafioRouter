import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Nave = () => {
    return (

        <Navbar style={{ background: "rgb(255 53 70)" }} variant="dark">
            <Container className="justify-content-space-between">
                <div>
                    <Link to="/home" className="text-white ms-3 text-decoration-none">
                        🏠Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        📒Contacto
                    </Link>
                </div>
                <Link to="/home" className="text-white ms-3 text-decoration-none">
                    Happy Cake 🍰
                </Link>
            </Container>
        </Navbar>
    )
};

export default Nave;