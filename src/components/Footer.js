import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener(
            "load",
            () => {
                this.setState({
                    isMobileView: window.innerWidth < 800,
                });
            },
            false
        );
        window.addEventListener(
            "resize",
            () => {
                this.setState({
                    isMobileView: window.innerWidth < 800,
                });
            },
            false
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "load",
            () => {
                this.setState({
                    isMobileView: window.innerWidth < 800,
                });
            },
            false
        );
        window.removeEventListener(
            "resize",
            () => {
                this.setState({
                    isMobileView: window.innerWidth < 800,
                });
            },
            false
        );
    }
    render() {
        const smallViewArray = this.state.isMobileView ? ["", "", "", "", "", ""] : ["Email", "Phone", "GitHub", "Behance", "LinkedIn", "Facebook", "Instagram", "Youtube"];
        return (
            <Navbar
                className="dark-bar"
                style={{
                    position: "sticky",
                    bottom: 0,
                    zIndex: 2000,
                }}
                variant="dark"
            >
                <Nav className="mx-auto">
                    <Nav.Link href="https://github.com/MandlaMthethwa" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faGithubSquare} /> {smallViewArray[2]}
                    </Nav.Link>
                    
                    <Nav.Link href="https://www.linkedin.com/in/mandlamthethwa/" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faLinkedin} /> {smallViewArray[4]}
                    </Nav.Link>
                    <Nav.Link href="https://facebook.com/MandlaMthethwa2" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faFacebookSquare} /> {smallViewArray[5]}
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/mandlah_rsa" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faInstagram} /> {smallViewArray[6]}
                    </Nav.Link>
                    
                </Nav>
            </Navbar>
        );
    }
}

export default Footer;
