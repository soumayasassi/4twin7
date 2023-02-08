import { Component } from "react";
import Card from "react-bootstrap/Card";
class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  <>
        
        <Card style={{ width: "18rem" }} className="text-center" border="secondary">
             <Card.Header>
             <Card.Img    variant="top"  src={"../assets/"+this.props.product.img}   alt="Product Img"
          height={200}  />
        </Card.Header>
        <Card.Body>

          <Card.Title><h3>{this.props.product.name}</h3></Card.Title>
          <Card.Text>
          
             {this.props.product.description} <br></br>
            {this.props.product.price} dt
          </Card.Text> 
           
        </Card.Body>
      </Card></>);
    }
}
 
export default Product;