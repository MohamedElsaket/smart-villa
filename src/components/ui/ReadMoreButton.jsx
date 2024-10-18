import { Link } from "react-router-dom";

const ReadMoreButton = ({ to }) => {
  return (
    <button className="uppercase w-full text-c-5 hover:opacity-80">
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        to={to}
      >
        read more &rarr;
      </Link>
    </button>
  );
};

export default ReadMoreButton;
