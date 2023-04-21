import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";

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

export default ProductList;
