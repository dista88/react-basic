import React from "react";

const MenuItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-red-100 text-white">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

export default MenuItem;
