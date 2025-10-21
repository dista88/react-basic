import React from "react";

const Greet = () => {
  const today = new Date();
  const formatDate = today.toLocaleDateString();
  return (
    <div>
      <h1>hello</h1>
      <p>{formatDate}</p>
    </div>
  );
};

export default Greet;
