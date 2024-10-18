import Heading from "../../common/Heading";
import Title from "../../common/Title";

import ReadMoreButton from "../../ui/ReadMoreButton";
import Features from "./Features";
import { useLocation } from "react-router-dom";

const Featured = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-10">
      <Title className="mx-auto">featured</Title>
      <Heading>explore featured latest properties</Heading>
      <Features />
      {pathname === "/property" ? "" : <ReadMoreButton to="/property" />}
    </div>
  );
};

export default Featured;
