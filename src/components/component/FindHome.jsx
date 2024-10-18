import { IoHomeOutline } from "react-icons/io5";

import { teamMembers } from "../../data/dummyData";
import photo from "../../../public/images/property (1).jpeg";
import Button from "../ui/Button";

const FindHome = () => {
  return (
    <div className="py-10">
      <div className="bg-c-3 rounded-xl grid grid-cols-2 overflow-hidden">
        <div className="col-span-2 md:col-span-1">
          <img
            src={photo}
            alt="property"
            className="md:w-[450px] h-[270px] w-full"
          />
        </div>

        <div className="col-span-2 md:col-span-1 place-content-center flex flex-col gap-5 p-7 md:py-0 md:px-10 text-center sm:text-start">
          <div className="bg-c-1 rounded-xl p-3 flex flex-col gap-5 items-center">
            <ul className="flex pl-5">
              {teamMembers.slice(0, 4).map((item) => (
                <li key={item.id} className="text-slate-50">
                  <img
                    src={item.image}
                    alt="Member"
                    className="max-w-10 rounded-full -ml-3"
                  />
                </li>
              ))}
            </ul>
            <p className="text-slate-200">People Successfull Getting Homes</p>
          </div>

          <h2 className="text-2xl text-slate-200 font-bold">
            You invest in the apartment of your choice
          </h2>
          <div className="flex gap-2 text-slate-200">
            <div className="bg-c-2 flex gap-3 items-center rounded-lg py-2 px-3 pr-10">
              <span className="text-slate-300 font-semibold">
                <IoHomeOutline />
              </span>
              <input
                type="text"
                placeholder="Find Your Nice Home"
                className="bg-c-2 outline-none"
              />
            </div>
            <Button className="px-3 py-2">
              <span className="font-semibold">&#8594;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindHome;
