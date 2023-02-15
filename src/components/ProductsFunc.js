import products from "../products.json"; 
import ProductFunc from './ProductFun';
import { Container ,Row ,Col } from 'react-bootstrap';
 
function ProductsFunc () {
    const buy = (product) => {
        product.quantity --;
        
       };
    return ( 

        <Container style={{ marginTop: "30px" }}>
    
        <Row>
          {products.map((product) => (
            <Col md={4}>
              <ProductFunc product={product} buyFunction={buy}></ProductFunc>
            </Col>
          ))}
        </Row>
         
      </Container>
     );
}

export default ProductsFunc;