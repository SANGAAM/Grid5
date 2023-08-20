import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "./ProductContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setProduct } = useProductContext();
  const handleProductClick = (product) => {
    setProduct(product);
    navigate("/product-detail");
    // Redirect to product details page using react-router or similar
  };
  return (
    <Card>
      <Card.Content>
        <Image
          src={product.product_photos[0]}
          size="medium"
          verticalAlign="middle"
          onClick={() => handleProductClick(product)}
        />
      </Card.Content>
      <Card.Content extra>
        <Card.Header>{product.product_title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
