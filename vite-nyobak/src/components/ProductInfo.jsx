import React from "react";

const ProductInfo = () => {
  const products = [
    { id: 1, name: "laptop", price: 1200, availability: "in Stock" },
    { id: 2, name: "laptop", price: 1200, availability: "in Stock" },
  ];

  const apalah = {
    name: "kontol",
    age: 21,
    panjang: 200,
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(({ id, name, price, availability }) => (
        <div key={id}>
          <p>Name: {name}</p>
          <p>Price: ${price}</p>
          <p>Availability: {availability}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductInfo;
