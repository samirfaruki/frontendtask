import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img className="product-image" src={product.image} alt="API Image" />
          <p>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
