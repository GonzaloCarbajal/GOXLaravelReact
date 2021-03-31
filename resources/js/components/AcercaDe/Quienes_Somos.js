import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const Quienes = () => (

    <section>
        <Jumbotron fluid>
            <hr/>
            <Container>
                <h1>¿QUIENES SOMOS?</h1>
                <p>
                    Somos una familia, que tiene alma de emprendimiento, y esperemo poder transmitir a
                    ustedes nuestra pasión, con la mejor oferta del mercado, y siempre con la mejor calidad
                </p>
            </Container>
        </Jumbotron>

        <ListGroup variant="flush">
            <ListGroup.Item>
                <a href="https://api.whatsapp.com/send?phone=5492615568398&text=Hola" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-outline-success">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        Ir a Whatsapp - 261 556-8398
                    </button>
                </a>

            </ListGroup.Item>
            <ListGroup.Item>
                <a href="https://www.facebook.com/Sofronia-Accesorios-214474416666326/" target="_blank"
                   rel="noreferrer">
                    <button type="button" className="btn btn-outline-info">
                        <FontAwesomeIcon icon={faFacebook}/>
                        Ir a Facebook
                    </button>
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="https://instagram.com/sofronia.accesorios?igshid=1pmvan98zf66u" target="_blank"
                   rel="noreferrer">
                    <button type="button" className="btn btn-outline-danger">
                        <FontAwesomeIcon icon={faInstagram}/>
                        Ir a Instagram
                    </button>
                </a></ListGroup.Item>
            <ListGroup.Item>
                <a href="https://www.linkedin.com/in/gonzalo-carbajal/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-outline-primary">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                        Ir a LinkedIn
                    </button>
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="https://twitter.com/bootsnipp" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-outline-secondary">
                        <FontAwesomeIcon icon={faTwitter}/>
                        Ir a Twitter
                    </button>
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="mailto:gonzacarbajal18@gmail.com" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-outline-warning">
                        <FontAwesomeIcon icon={faMailBulk}/>
                        Ir a E-Mail
                    </button>
                </a></ListGroup.Item>
        </ListGroup>
    </section>
)

export default Quienes
