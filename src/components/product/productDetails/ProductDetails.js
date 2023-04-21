// import { useState, useEffect } from "react";

// const API_URL = "https://fakestoreapi.com/products";

// const ProductDetails = ({ match }) => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const productId = match.params.id;
//     fetch(`${API_URL}/${productId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch((error) => console.log(error));
//   }, [match.params.id]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//           <img src={product.image} alt={product.title} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
