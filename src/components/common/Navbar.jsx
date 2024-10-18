import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Menu from "../ui/Menu";
import { BiBuildingHouse } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { handleMenu } from "../../features/uiSlice";
import { navbarLinks } from "../../data/dummyData";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.uiSlice);
  const { savedCategories } = useSelector((state) => state.propertySlice);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-12 lg:px-20 py-4 text-slate-200">
      <div className="absolute inset-0 bg-c-1/50 backdrop-blur-sm flex items-center justify-center -z-50"></div>
      <h2 className="flex items-center">
        <span className="text-c-5 text-3xl">
          <BiBuildingHouse />
        </span>
        <span className="pl-3">Smart Villa</span>
      </h2>

      <div className="flex items-center">
        <ul className="lg:flex hidden gap-8">
          {navbarLinks.map((item) => (
            <li
              key={item.name}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1"
            >
              <Link
                to={item.to}
                className={`hover:text-c-5 ${
                  pathname === item.to && "text-c-5"
                } `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-2 md:gap-4 items-center px-5 md:px-8">
          <li className="p-2 cursor-pointer rounded-full bg-c-5 text-white">
            <IoSearchOutline />
          </li>
          <Link
            to="/saved"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <li className="relative p-2 cursor-pointer rounded-full bg-c-3 hover:bg-c-1 transition-colors">
              <span className="absolute -top-1 -right-3 w-5 h-5 rounded-full bg-c-5 text-xs text-slate-50 font-bold text-center">
                {savedCategories.length}
              </span>
              <FaUser />
            </li>
          </Link>
        </ul>

        <div
          onClick={() => {
            dispatch(handleMenu());
          }}
          className="lg:hidden text-c-5"
        >
          {open ? <FiX /> : <GiHamburgerMenu />}
        </div>
        {open && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
