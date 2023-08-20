import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Button, Card, Grid, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const LandingPage = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://real-time-product-search.p.rapidapi.com/search",
      params: {
        q: keyword,
        country: "us",
        language: "en",
        sort_by: "TOP_RATED",
      },
      headers: {
        "X-RapidAPI-Key": "2296f60c44mshb9c6fb7d4b4166fp142380jsn1b402958f225",
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
  const top_rated = async () => {
    const options = {
      method: "GET",
      url: "https://real-time-product-search.p.rapidapi.com/search",
      params: {
        q: "electronics",
        country: "us",
        language: "en",
        sort_by: "TOP_RATED",
      },
      headers: {
        "X-RapidAPI-Key": "2296f60c44mshb9c6fb7d4b4166fp142380jsn1b402958f225",
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
  const [uid, setUid] = useState(0);
  useEffect(() => {
    top_rated();
    const uid = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setUid(uid); // Fetch top-rated products when the component mounts
  }, []);

  return (
    <div>
      <Grid verticalAlign="middle" textAlign="center" columns={"equal"}>
        <Grid.Column>
          <h2
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Products Search
          </h2>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Welcome, Flipkart Grid
          </h2>
          <Input
            placeholder="Enter product name..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            action={<Button onClick={handleSearch}>Search</Button>}
            style={{ padding: "10px" }}
          />
        </Grid.Column>
      </Grid>
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

export default LandingPage;
