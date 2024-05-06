import React from "react";
import { Card } from "react-bootstrap";
import  {Link} from "react-router-dom";
import Rting from "./Rting";
const Product = ({ product }) => { // Capitalized component name

  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/products/${product._id}`}>
            <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
        <Link to={`/products/${product._id}`}>
            <Card.Title as="div" className="product-title">
                <strong>{product.name}</strong>
            </Card.Title>
        </Link> 
        <Card.Text as="div">
            <Rting value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
        </Card.Body>
    </Card>
  );
};

export default Product; 
