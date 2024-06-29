import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.jpg";
import Nav from "../../modules/Home/components/Navbar/Nav";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import LogoutImg from "../../img/logout.png";
import userImg from "../../img/usericon.png";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpend, setMenuOpend] = useState(false);
  const toggleMenu = () => setMenuOpend(!menuOpend);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="bg-fixed top-0 left-0 m-auto max_pad_container w-full h-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        <div>
          <Link>
            <img
              src={logo}
              alt=""
              height={66}
              width={88}
              className="rounded-full border-2 border-red-500 hover:scale-50"
            />
          </Link>
        </div>
        {/**Nav desktop */}
        <Nav containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
        {/**Nav mobile */}
        <Nav
          containerStyles={`${
            menuOpend
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpend ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {/* <NavLink
              to={"logout"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={LogoutImg} alt="logoutIcon" height={19} width={19} />
              Logout
            </NavLink> */}
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={userImg} alt="userIcon" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
