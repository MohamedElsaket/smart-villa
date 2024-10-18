import Button from "../ui/Button";
import Hero4 from "../../../public/images/hero-4.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative z-0 min-h-screen grid grid-cols-12 items-center"
      style={{
        backgroundImage: "url(public/images/hero-bg-pattern.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-10 right-10 bg-[#04a7ff] blur-[120px] -z-10 w-72 h-72 rounded-full "></div>
      <div className="col-start-1 col-span-12 md:col-span-6 text-slate-300 flex flex-col gap-5 lg:gap-10 items-start">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Property Consisting Land And Buildings
        </h2>
        <p className="text-sm md:text-lg text-slate-400 border-l-4 border-c-5 pl-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
          unde exercitationem! Recusandae error quaerat sapiente quibusdam culpa
          magni eius?
        </p>
        <Link
          to="/smart-villa/property"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Button>GET STARTED</Button>
        </Link>
        <ul className="flex gap-10">
          <li>
            <h2>
              12K <span className="text-c-5">+</span>{" "}
            </h2>
            <p>Requested Projects</p>
          </li>
          <li>
            <h2>
              15K <span className="text-c-5">+</span>{" "}
            </h2>
            <p>Requested Completed</p>
          </li>
          <li>
            <h2>
              100 <span className="text-c-5">+</span>{" "}
            </h2>
            <p>Served Clients</p>
          </li>
        </ul>
      </div>
      <div className="md:col-start-7 md:col-span-6 col-start-1 col-span-12">
        <img src={Hero4} alt="" />
      </div>
    </div>
  );
};

export default Hero;
