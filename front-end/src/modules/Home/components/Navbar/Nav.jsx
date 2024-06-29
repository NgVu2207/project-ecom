import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Nav = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-1">
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-1">
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-1">
          <MdContacts />
          Kid's
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
