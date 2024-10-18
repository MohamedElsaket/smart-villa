import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Title from "../../common/Title";
import Button from "../../ui/Button";
import { saveItem, unsaveItem } from "../../../features/propertySlice";

import { FaBed, FaRegHeart, FaWaveSquare } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import { RiDislikeLine } from "react-icons/ri";
import { IoStar, IoStarOutline } from "react-icons/io5";

const FeatureItem = ({ item }) => {
  const dispatch = useDispatch();
  const { savedCategories } = useSelector((state) => state.propertySlice);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const {
    id,
    name,
    image,
    price,
    number_of_beds,
    number_of_bathrooms,
    location,
    dimensions,
  } = item;

  function handleLikeClick() {
    setIsLiked((like) => !like);
    !isLiked ? toast.success("Liked") : toast.success("Disliked");
  }

  function handleSaveClick() {
    const newItem = { ...item };
    const existedItem = savedCategories.find((item) => item.id === id);
    if (existedItem && existedItem.id === id) return isSaved === true;

    setIsSaved((save) => !save);
    !isSaved ? dispatch(saveItem(newItem)) : dispatch(unsaveItem(id));
    !isSaved
      ? toast.success("Added To Favorite List")
      : toast.success("Removed From Favorite List");
  }

  return (
    <li>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="group-hover:scale-125 duration-200 h-[200px] md:h-[300px] w-full"
        />

        <ul className="absolute flex gap-3 bottom-4 right-4">
          <li
            onClick={handleLikeClick}
            className="bg-c-5 p-2 text-slate-50 rounded-full hover:bg-slate-50 hover:text-c-5 duration-200 cursor-pointer"
          >
            {!isLiked ? <FaRegHeart /> : <RiDislikeLine />}
          </li>
          <li
            onClick={handleSaveClick}
            className="bg-c-5 p-2 text-slate-50 rounded-full hover:bg-slate-50 hover:text-c-5 duration-200 cursor-pointer"
          >
            {!isSaved ? <IoStarOutline /> : <IoStar />}
          </li>
        </ul>
        <span className="absolute top-2 left-2 hidden group-hover:block text-slate-50 bg-c-2 px-3 py-1 rounded-full opacity-80">
          {location}
        </span>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h2 className="font-bold text-xl flex items-center justify-between">
          <Link
            to={`/property/featureDetails/${item.id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-slate-300 group-hover:text-c-5 duration-200 "
          >
            {name}
          </Link>
          <span>{price}</span>
        </h2>
        <div className="flex justify-between items-end">
          <ul className="flex flex-col gap-2 justify-between text-slate-400">
            <li className="flex items-center gap-2">
              <Title className="p-2">
                <FaBed />
              </Title>
              {number_of_beds} Beds
            </li>
            <li className="flex items-center gap-2">
              <Title className="p-2">
                <MdOutlineBathroom />
              </Title>
              {number_of_bathrooms} Bathrooms
            </li>
            <li className="flex items-center gap-2">
              <Title className="p-2">
                <FaWaveSquare />
              </Title>
              {dimensions}
            </li>
          </ul>
          <Link
            to={`/property/featureDetails/${item.id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button>details</Button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;
