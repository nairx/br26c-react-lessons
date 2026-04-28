import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditProd() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const Navigate = useNavigate();
  useEffect(() => {
    const url = "http://localhost:3001/products/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleUpdate = async () => {
    const url = "http://localhost:3001/products/"+id
    await axios.put(url, product);
    Navigate("/");
  };
  return (
    <div>
      <h2>Edit Product Form</h2>
      <p>
        <input type="number" value={product.id} disabled />
      </p>
      <p>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
          value={product.desc}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
          value={product.imgUrl}
        />
      </p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
