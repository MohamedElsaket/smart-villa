import { brands } from "../../data/dummyData";
import Heading from "../common/Heading";
import Title from "../common/Title";

const Brands = () => {
  return (
    <div>
      <Title className="mx-auto">Brands</Title>
      <Heading>our brands</Heading>
      <div className="text-center max-w-xl mx-auto text-slate-400 py-3 text-sm">
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quia eius quaerat, quas deleniti sed. Sapiente illo architecto!
        </p>
      </div>
      <ul className="flex gap-10 items-center justify-center py-10">
        {brands.map((item) => (
          <li key={item}>
            <img
              src={item}
              alt="Brand Name"
              className="hover:scale-125 duration-200"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
