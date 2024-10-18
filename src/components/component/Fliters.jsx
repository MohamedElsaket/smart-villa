import { priceRanges, propertyTypes, sellOrRent } from "../../data/dummyData";
import Button from "../ui/Button";

import { BiBuildingHouse } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const Fliters = () => {
  return (
    <div className="bg-c-2 p-3 rounded-xl text-slate-200 grid grid-cols-5 gap-6 items-center lg:mx-24">
      <div className="bg-c-3 rounded-xl col-span-5 md:col-span-1 flex flex-col p-3 text-slate-300 overflow-hidden">
        <label className="font-bold">Location</label>
        <div className="flex items-center gap-2">
          <div className="text-sm">
            <MdLocationPin />
          </div>
          <input
            className="bg-transparent max-w-full outline-none"
            type="text"
            placeholder="Enter The Location"
          />
        </div>
      </div>
      <div className="bg-c-3 rounded-lg col-span-5 md:col-span-1 flex flex-col p-3 text-slate-300">
        <label className="font-bold">Properties</label>
        <div className="flex items-center gap-2">
          <BiBuildingHouse />
          <select name="Property Type" className="bg-c-3 outline-none ">
            {propertyTypes.map((item) => (
              <option className="max-w-full" key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-c-3 rounded-lg col-span-5 md:col-span-1 flex flex-col p-3 text-slate-300">
        <label className="font-bold">Price range</label>
        <div className="flex items-center gap-2">
          <FaRegMoneyBillAlt />
          <select name="Property Type" className="bg-c-3 outline-none ">
            {priceRanges.map((item) => (
              <option className="max-w-full" key={item.id}>
                {item.range}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-c-3 rounded-lg col-span-5 md:col-span-1 flex flex-col p-3 text-slate-300">
        <label className="font-bold">For</label>
        <div className="flex items-center gap-2">
          <IoBagRemoveOutline />
          <select name="Property Type" className="bg-c-3 outline-none ">
            {sellOrRent.map((item) => (
              <option className="max-w-full" key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-span-5 md:col-span-1 text-center">
        <Button>SEARCH</Button>
      </div>
    </div>
  );
};

export default Fliters;
