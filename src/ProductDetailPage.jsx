import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
import axios from "axios";
import { useProductContext } from "./ProductContext";
import { Card, Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const ProductDetailPage = () => {
  const { product } = useProductContext();
  const [recommendations, setRecommendations] = useState([]);
  const [products, setProducts] = useState([]);
  const keyword = product.product_title;
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/get_recommendations",
          { keyword }
        );
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    handleSearch();
  }, [product.product_id]);
  useEffect(() => {
    if (recommendations.length > 0) {
      const fetchRecom = async () => {
        const options = {
          method: "GET",
          url: "https://real-time-product-search.p.rapidapi.com/search",
          params: {
            q: recommendations[0],
            country: "us",
            language: "en",
            limit: 2,
          },
          headers: {
            "X-RapidAPI-Key":
              "2296f60c44mshb9c6fb7d4b4166fp142380jsn1b402958f225",
            "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
          },
        };
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setProducts(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchRecom();
    }
  }, [recommendations]);
  return (
    <div>
      <img
        src={product.product_photos[0]}
        width="500"
        height="600"
        alt={product.product_title}
      ></img>
      <h1>{product.product_title}</h1>
      <p>Description: {product.product_description}</p>
      {/* Other product details */}
      <h2>Recommended Products</h2>
      <Grid verticalAlign="middle" textAlign="center" columns={"equal"}>
        <Card.Group style={{ display: "flex", justifyContent: "center" }}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Card.Group>
      </Grid>
    </div>
  );
};

export default ProductDetailPage;
