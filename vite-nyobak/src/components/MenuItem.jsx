import React from "react";

const MenuItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center gap-3 p-2 cursor-pointer text-[18px] font-semibold text-white hover:underline underline-offset-8 ">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default MenuItem;
