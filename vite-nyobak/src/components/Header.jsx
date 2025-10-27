import React from "react";
import logo from "../assets/Images/logo.png";
import { menu } from "../data/menuData";
import MenuItem from "./MenuItem";
import { mobileMenuIcon } from "../data/menuData";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const restOfMenu = menu.slice(2);
  return (
    <nav className="flex justify-between items-center gap-8">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-20 object-cover md:w-[115px]" />
        <div className="md:hidden flex gap-5">
          {menu.slice(0, 2).map((item) => (
            <MenuItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
          <div onClick={toggleModal}>
            <MenuItem
              name={mobileMenuIcon.name}
              Icon={mobileMenuIcon.icon}
              key="dots"
            />
          </div>
          {isModalOpen && (
            <div className="absolute mt-3 right-0  p-3 bg-[#121212] border border-gray-700  px-5 py-4">
              {restOfMenu.map((item) => (
                <div onClick={toggleModal} className="w-full" key={item.name}>
                  <MenuItem name={item.name} Icon={item.icon} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <MenuItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt=""
        className="w-10 rounded-full "
      />
    </nav>
  );
};

export default Header;
