import Title from "../../common/Title";
import Heading from "../../common/Heading";
import { projects } from "../../../data/dummyData";

const Projects = () => {
  return (
    <div>
      <Title className="mx-auto">Categories</Title>
      <Heading>
        specialists services provided in this apartment building
      </Heading>
      <ul className="grid grid-cols-3 gap-5 py-10">
        {projects.map(({ id, name, number, image }) => (
          <li
            key={id}
            className="group relative overflow-hidden h-[250px] col-span-3 md:col-span-1 rounded-xl"
          >
            <img
              src={image}
              alt={name}
              className="group-hover:scale-150 duration-200 h-full w-full"
            />
            <div className="absolute left-3 bottom-3 font-bold bg-c-3 p-3 rounded-xl opacity-80">
              <p className="text-slate-200">{name}</p>
              <p className="text-slate-300">{number} Property</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
