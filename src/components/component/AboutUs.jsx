import Title from "../common/Title";
import Button from "../ui/Button";
import property from "../../../public/images/property (5).jpg";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-10 gap-6 py-10 text-slate-400">
      <div className="col-span-10 lg:col-span-5 flex flex-col gap-5">
        <Title>about us</Title>
        <Heading className="text-start">
          We Specialize in Quality Home Renovations
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
          earum saepe quibusdam, temporibus aut sapiente, ea alias libero, ipsam
          perferendis. Consectetur maiores, dicta, earum eaque facilis adipisci
          dignissimos optio fuga officia itaque quo impedit.
        </p>
        <ul className="flex flex-col gap-2 text-start">
          <li className="flex items-center gap-2">
            <Title>&#10003;</Title>
            <span>Outstanding Property</span>
          </li>
          <li className="flex items-center gap-2">
            <Title>&#10003;</Title>
            <span>Professional and experienced human resource</span>
          </li>
          <li className="flex items-center gap-2">
            <Title>&#10003;</Title>
            <span>Provide the best services for users</span>
          </li>
          <li className="flex items-center gap-2">
            <Title>&#10003;</Title>
            <span>Modern city locations and exceptional lifestyle</span>
          </li>
          <li className="mt-5">
            <Link
              to="/smart-villa/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button>read more</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 lg:col-start-6 rounded-xl overflow-hidden text-center">
        <img src={property} alt="property5" className="max-w-full " />
      </div>
    </div>
  );
};

export default AboutUs;
