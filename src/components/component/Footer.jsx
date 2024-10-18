import Button from "../ui/Button";

import { BiBuildingHouse } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import CreatedBy from "./CreatedBy";
import { Link } from "react-router-dom";

const Footer = () => {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <ul className="grid grid-cols-4 gap-8 text-slate-400 bg-c-3 py-5 px-8 mt-10 rounded-2xl">
        <li className="col-span-4 md:col-span-1">
          <h2 className="flex items-center text-slate-200 p-3 text-2xl font-bold">
            <span className="text-c-5 text-3xl">
              <BiBuildingHouse />
            </span>
            <span className="pl-3">Smart Villa</span>
          </h2>
          <p className="pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab harum
            explicabo illo, magnam vitae expedita.
          </p>
          <ul className="flex gap-4 items-center">
            <li className="p-3 bg-c-1 rounded-full hover:bg-c-5 hover:text-slate-50 duration-200">
              <a
                href="https://www.facebook.com/mohamed.elsaket.5"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="p-3 bg-c-1 rounded-full hover:bg-c-5 hover:text-slate-50 duration-200">
              <a
                href="https://wa.me/201030848281?text=Hello%20there!"
                target="_blank"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="p-3 bg-c-1 rounded-full hover:bg-c-5 hover:text-slate-50 duration-200">
              <a href="https://github.com/MohamedElsaket" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="p-3 bg-c-1 rounded-full hover:bg-c-5 hover:text-slate-50 duration-200">
              <a
                href="https://www.linkedin.com/in/mohamed-elsaket-996285276/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </li>

        <li className="col-span-2 md:col-span-1">
          <h2 className="text-slate-200 py-3 text-2xl font-bold">Services</h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <a href="#">Order Tracking</a>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <a href="#">Whislist</a>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <a href="#">Terms of use</a>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <a href="#">Contact support</a>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <a href="#">2 year guarantee</a>
            </li>
          </ul>
        </li>

        <li className="col-span-2 md:col-span-1">
          <h2 className="text-slate-200 py-3 text-2xl font-bold">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <Link onClick={handleClick} to="/smart-villa/about">
                Adout Us
              </Link>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <Link onClick={handleClick} to="/smart-villa/services">
                Services
              </Link>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <Link onClick={handleClick} to="/smart-villa/property">
                Property
              </Link>
            </li>
            <li className="hover:text-c-5 hover:pl-3 duration-200">
              <Link onClick={handleClick} to="/smart-villa/blog">
                Blog
              </Link>
            </li>
          </ul>
        </li>

        <li className="col-span-4 md:col-span-1">
          <h2 className="text-slate-200 py-3 text-xl font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm">
            Subscribe to be the first one to know about updates. Enter your
            email
          </p>
          <div className="pt-5">
            <input
              type="text"
              placeholder="Email Address.."
              className="bg-transparent placeholder:text-sm border border-slate-300 rounded-lg p-2 mb-4 w-full"
            />
            <Button>Subscribe</Button>
          </div>
        </li>
      </ul>
      <CreatedBy />
    </>
  );
};

export default Footer;
