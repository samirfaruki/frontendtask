import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const API_URL = "https://fakestoreapi.com/products";
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProducts = currentProducts.filter(
    (product) =>
      product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search Products"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredProducts.length === 0 ? (
            <p>No results found</p>
          ) : (
            <>
              <table>
                <thead>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="product-image">
                        <img src={product.image} alt={product.category} />
                      </td>
                      <td>
                        {" "}
                        <Link to={`/products/${product.id}`}>
                          {product.title}
                        </Link>
                      </td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

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
          <p>Price: {product.price}</p>
          <p>
            <img
              className="product-image"
              src={product.image}
              alt="API Image"
            />
          </p>
        </div>
      )}
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { ProductList, ProductDetails };
