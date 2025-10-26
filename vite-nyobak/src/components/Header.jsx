import React from "react";
import logo from "../assets/Images/logo.png";
import { menu } from "../data/menuData";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div>
      <img src={logo} className="w-20 object-cover md:w-[115px]" />
      <ul>
        {menu.map((item) => (
          <MenuItem name={item.name} Icon={item.icon} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
