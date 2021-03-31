import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProducto(props){
    const {producto, codigo, img} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Ver Imagen
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{producto}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{codigo}</Modal.Body>
                <Modal.Footer>
                    <img src={img} className="card-img-top img-fluid" alt="..."/>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalProducto
