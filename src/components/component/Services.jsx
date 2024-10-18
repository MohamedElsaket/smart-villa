import Title from "../common/Title";
import Heading from "../common/Heading";
import { services } from "../../data/dummyData";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-10">
      <Title className="mx-auto">services</Title>
      <Heading>
        specialists services provided in this apartment building
      </Heading>
      <ul className="grid grid-cols-6 gap-2 md:gap-12 text-slate-300 text-center py-12">
        {services.map(({ id, name, icon, text }) => {
          const BiIconComponent = BiIcons[icon];
          const FaIconComponent = FaIcons[icon];

          return (
            <li
              key={id}
              className="col-span-6 md:col-span-3 lg:col-span-2 text-center p-3 rounded-2xl border-y-4 border-transparent hover:border-c-5 hover:bg-c-2 duration-300"
            >
              <Title className="mx-auto text-3xl">
                {BiIconComponent ? (
                  <BiIconComponent />
                ) : FaIconComponent ? (
                  <FaIconComponent />
                ) : null}{" "}
              </Title>
              <div className="flex flex-col gap-5">
                <Heading>{name}</Heading>
                <p className="text-slate-400">{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
