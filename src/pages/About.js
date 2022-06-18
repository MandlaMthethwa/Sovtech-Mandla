import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/professional-me.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/professional-me.jpg";
import Typed from "typed.js";

import UMassLogo from "../assets/webp/umass-logo.webp";
import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";
import EducationCard from "../components/EducationCard";




class About extends React.Component {
    componentDidMount() {

        this.typed_options = {
            strings: ["Software Developer ", "DevOps Engineer Enthusiast", "Graphic Designer"],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            showCursor: false,
            smartBackspace: false,
            backDelay: 2000,
        };
        this.typed = new Typed(this.el, this.typed_options);
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (
            <div className="header center outer-structure">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg="10">
                        <h1 id="heading-name">HI! I'M A</h1>
                            <h3 id="heading-desc">
                                <span
                                    ref={(el) => {
                                        this.el = el;
                                    }}
                                />
                                &nbsp;
                            </h3>
                        </Col>
                    </Row>
                    <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="Education" />
                    
                        <Row style={{ display: "inline-flex" }}>
                            <EducationCard
                                image={UMassLogo}
                                fallback_image={UMassFallbackLogo}
                                title="Tshwane University of Technology"
                                address="Mandela St, Witbank, Emalahleni, 1034"
                                degree="National Diploma Information Technology"
                                major="Software Development and System Analysis"
                                class="Class of 2021"
                                duration="January 2017 - June 2021"
                                
                                details={
                                    <React.Fragment>
                                        • Major: Software Development and System Analysis
                                        <br />
                                        •Student Assistant (2018 - 2020)
                                        <br />
                                       
                                        
                                    </React.Fragment>
                                }
                            />
                            </Row>
                            </div>
                            </div>
                </Container>
            
               
                            
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="About" />
                    <Container fluid style={{ padding: "1.5em" }}>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <Col style={{ textAlign: "center" }}>
                                <picture>
                                    <source cclassName="header-img" type="image/webp" srcset={ProfessionalHeadshot} />
                                    <img className="header-img" src={FallbackProfessionalHeadshot} alt="header" fluid />
                                </picture>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <Col lg="10">
                                <p
                                    id="about"
                                    className="secondary-text"
                                    style={{
                                        padding: "25px 10px",
                                        textAlign: "justify",
                                        color: "#FFFFFF",
                                        margin: "0w",
                                    }}
                                >
                                    I am a Software Developer Graduate, studied at Tshwane University of
                                    Technology with experience in developing hybrid, full stack mobile and web 
                                    applications. I am familiar with most programming technologies. <br/><br/>

                                    I have good adapdapility, communication and time management skills.
                                    I write a neat code that can be  understood and can engage with end users, I'm a person
                                    that follows instructions and  contributes ideas in a team.
                                    During my spare time I play chesss and watch Anime.
                                    

                
                                </p>
                                
                            </Col>
                        </Row>
                        <TitleBar title="Why SovTech?" />
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <Col lg="10">
                                <p
                                    id="about"
                                    className="secondary-text"
                                    style={{
                                        padding: "15px 5px",
                                        textAlign: "justify",
                                        color: "#FFFFFF",
                                        margin: "0w",
                                    }}
                                >
                                    The main reason is that I want to grow in both my developing and leadership skills
                                    and where to do that than in one of the leading software companies in SA. I want to create and
                                    maintance real time applications with the right guidance of skilled mentors.<br/><br/>

                                    I want to join the team because of the diversity and fun it has while working as 
                                    I have seen the recent hackerthon video and I was so intrigued by it as this is the
                                    kind of working environment I long for. I feeel like this is the best organization to kickstart
                                    my career and a with hope of a long term woking relationship. 

                                    <br/><br/><br/>
                                    Below find My Resume , Cover letter and Academic Trnascript and Do visit my Socials 
                                </p>
                                     </Col>
                        </Row>
                        
                        

                        <Row className="justify-content-center">
                            <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faFileAlt} /> Resume
                            </Button>
                            
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="resume-btn" href="/cover.pdf" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faFileAlt} /> Cover letter
                            </Button>
                            
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="resume-btn" href="/transcript.pdf" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faFileAlt} /> Academic Transcript
                            </Button>
                            
                        </Row>
                    </Container>
                    </div>
                    </div>
                </div>
                
            
        );
    }
}

export default About;
