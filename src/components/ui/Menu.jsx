import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../../features/uiSlice";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../data/dummyData";

const Menu = () => {
  const { open } = useSelector((state) => state.uiSlice);
  const dispatch = useDispatch();
  return (
    <div className="absolute left-0 top-0 bg-c-1 z-50 flex flex-col gap-10 px-10 mt-16 pt-10 opacity-90">
      <h2 className="text-3xl font-bold">Menu</h2>
      <ul className="h-screen w-screen opacity-80 flex flex-col gap-10 pl-10">
        {navbarLinks.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              dispatch(handleMenu());
            }}
            className="flex items-center gap-1"
          >
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
