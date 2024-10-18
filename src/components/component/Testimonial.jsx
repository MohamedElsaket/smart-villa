import Title from "../common/Title";
import Heading from "../common/Heading";
import { testimonials } from "../../data/dummyData";

import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div>
      <Title className="mx-auto">testimonial</Title>
      <Heading>what they're saying about our work feedback</Heading>
      <ul className="grid grid-cols-3 gap-4 py-10">
        {testimonials
          .slice(0, 3)
          .map(({ id, name, role, image, reviewText }) => (
            <li
              key={id}
              className="relative flex flex-col gap-3 col-span-3 md:col-span-1 rounded-xl p-5 bg-c-2"
            >
              <div className="absolute bottom-3 right-3 text-8xl text-c-3">
                <RiDoubleQuotesR />
              </div>
              <p className="text-slate-400">{reviewText}</p>
              <div className="flex items-center gap-5">
                <div className="overflow-hidden rounded-full w-16">
                  <img src={image} alt={name} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-slate-200">{name}</p>
                  <p className="text-slate-400">{role}</p>
                </div>
              </div>
              <span className="pl-20">⭐⭐⭐⭐⭐</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Testimonial;
