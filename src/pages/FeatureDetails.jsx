import { useParams } from "react-router-dom";

import { property } from "../data/dummyData";
import Title from "../components/common/Title";
import { FaBed, FaWaveSquare } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";

const FeatureDetails = () => {
  const { id } = useParams();

  const filteredItem = property.filter((item) => item.id === Number(id));

  return (
    <div>
      {filteredItem.map(
        ({
          id,
          name,
          image,
          price,
          number_of_beds,
          number_of_bathrooms,
          location,
          distance,
          contact,
          description,
          dimensions,
        }) => (
          <div key={id} className="grid grid-cols-8 gap-10 py-10">
            <div className="col-span-8 lg:col-span-3 rounded-xl overflow-hidden h-[250px] md:h-[350px]">
              <img src={`/smart-villa/${image}`} className="w-full h-full" />
            </div>
            <div className="col-span-8 lg:col-span-5 text-slate-100 lg:flex ">
              <div className="flex flex-col gap-5 lg:flex-1">
                <h2 className="text-c-5 text-2xl font-bold">{name}</h2>
                <p className="text-c-5 text-xl font-bold">{price}</p>
                <p>
                  Location : <span className="text-slate-400">{location}</span>{" "}
                </p>
                <p>
                  Distance : <span className="text-slate-400">{distance}</span>{" "}
                </p>
                <p>
                  Dimensions :{" "}
                  <span className="text-slate-400">{dimensions}</span>{" "}
                </p>
                <p className="text-slate-400">{description}</p>
              </div>
              <ul className="flex lg:flex-col lg:flex-1 items-end gap-2 justify-between text-slate-400 py-5">
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
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FeatureDetails;
