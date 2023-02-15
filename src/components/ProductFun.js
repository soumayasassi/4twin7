import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
function ProductFunc(props) {
    const [product,setProduct] = useState(props.product)
    return ( 
        <Card
        style={{ width: "18rem" }}
        className="text-center"
        border="secondary"
      >
        <Card.Header>
          <Card.Img
            variant="top"
            src={"../assets/" + product.img}
            alt="Product Img"
            height={200}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Quantity: {product.quantity} </Card.Text>
          <Card.Text> Price : {product.price}dt </Card.Text>
          <Card.Text>Like : {product.like}</Card.Text>
          <Row>
            <Col md={6}>
            {" "}
              <Button variant="primary" >
                Like
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="info"
                >
                Buy
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
     );
}

export default ProductFunc;