import { Component } from "react";
import Product from "./Product";
import products from "../products.json";
class Products extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <>


       {
products.map((p)=>{
   return( <Product product={p}></Product>)
}

)
       } 
        
        </> );
    }
}
 
export default Products;