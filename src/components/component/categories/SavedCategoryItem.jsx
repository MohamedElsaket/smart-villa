import { FaBed, FaWaveSquare } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import Title from "../../common/Title";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { unsaveItem } from "../../../features/propertySlice";
import toast from "react-hot-toast";

const SavedCategoryItem = ({
  item: {
    id,
    name,
    image,
    price,
    number_of_beds,
    number_of_bathrooms,
    location,
    distance,
    description,
    dimensions,
  },
}) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(unsaveItem(id));
    toast.success("Removed From Favorite List");
  }

  return (
    <div className="grid grid-cols-8 gap-10 p-5 rounded-xl border-c-3 border-2">
      <div className="col-span-8 lg:col-span-3 rounded-xl overflow-hidden h-[250px] md:h-[350px]">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="col-span-8 lg:col-span-5 text-slate-100 lg:flex ">
        <div className="flex flex-col gap-5 lg:flex-1">
          <div>
            <h2 className="text-c-5 text-2xl font-bold">{name}</h2>
            <p className="text-c-5 text-xl font-bold">{price}</p>
          </div>
          <p>
            Location : <span className="text-slate-400">{location}</span>{" "}
          </p>
          <p>
            Distance : <span className="text-slate-400">{distance}</span>{" "}
          </p>
          <p>
            Dimensions : <span className="text-slate-400">{dimensions}</span>{" "}
          </p>
          <p className="text-slate-400">{description}</p>
          <ul className="flex lg:flex-1 items-start justify-between gap-4 text-slate-400 ">
            <li className="flex flex-col md:flex-row items-center gap-2">
              <Title className="p-2">
                <FaBed />
              </Title>
              {number_of_beds} Beds
            </li>
            <li className="flex flex-col md:flex-row items-center gap-2">
              <Title className="p-2">
                <MdOutlineBathroom />
              </Title>
              {number_of_bathrooms} Bathrooms
            </li>
            <li className="flex flex-col md:flex-row items-center gap-2">
              <Title className="p-2">
                <FaWaveSquare />
              </Title>
              {dimensions}
            </li>
          </ul>
          <div className="text-center">
            <Button onClick={handleClick}>Unsave</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCategoryItem;
