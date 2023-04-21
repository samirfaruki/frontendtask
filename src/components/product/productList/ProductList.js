import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination";

const API_URL = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProducts = currentProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search products"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product) => (
                <table key={product.id}>
                  <tbody>
                    <tr>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                    </tr>
                  </tbody>
                  <Link to={`${API_URL}/product/${product.id}`}>
                    <h2>{product.title}</h2>
                  </Link>
                  <p>{product.description}</p>
                  <img src={product.image} alt={product.title} />
                </table>
              ))}
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
              />
            </>
          ) : (
            <p>No results found</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
