import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "./productSlice";

export default function ProductRedux() {
  const products = useSelector((state) => state.product.items);
  const user = useSelector(state => state.user)
  const [product, setProduct] = useState({});
  const Dispatch = useDispatch();

  const handleAdd = (product) => {
    product.user = user.name;
    Dispatch(addProduct(product));
  };

  return (
    <div>
      <h3>ProductRedux</h3>
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </p>
      <p>
        <button onClick={() => handleAdd(product)}>Add</button>
      </p>
      <hr />
      {products &&
        products.map((product) => (
          <li>
            {product.user}-{product.name}-{product.price}-
            <button onClick={() => Dispatch(deleteProduct(product.name))}>
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
