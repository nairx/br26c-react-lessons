import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Prod() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;
  // const Navigate = useNavigate();
  const fetchProducts = async () => {
    const url = `${API_URL}/products`;
    const res = await axios.get(url);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const url = `${API_URL}/products/${id}`
    await axios.delete(url);
    fetchProducts();
  };

  const handleAdd = async () => {
    const url = `${API_URL}/products`;
    const res = await axios.post(url, product);
    fetchProducts();
  };


  return (
    <div>
      <p>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
          placeholder="Enter Id"
        />
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Price"
        />
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
          placeholder="Description"
        />
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
          placeholder="Image Url"
        />
        <button onClick={handleAdd}>Add</button>
      </p>

      {products &&
        products.map((product) => (
          <div key={product.id}>
            <Link to={`/${product.id}`}>{product.name}</Link>-{product.price}-
            {product.desc}-
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
