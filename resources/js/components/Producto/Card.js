import React from "react";
import "../../../css/PaddingMargin.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalProducto from './ModalProducto'

const InfoCard = () => (
    <Row className="MarginTop60">
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>

        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA COMUN
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT01
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $100
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA COMUN"
                        codigo="BT01"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA CLARA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT02
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $200
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA CLARA"
                        codigo="BT02"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg" />
                <Card.Body>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text className="Margin0">
                        Producto: BILLETERA ESTRELLA
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Codigo: BT03
                    </Card.Text>
                    <Card.Text className="Margin0">
                        Precio: $300
                    </Card.Text>
                    <ModalProducto
                        producto="BILLETERA ESTRELLA"
                        codigo="BT03"
                        img="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                    />
                </Card.Body>
            </Card>
        </Col>
    </Row>
)

export default InfoCard
