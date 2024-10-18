import { property } from "../../../data/dummyData";

import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <ul className="grid grid-cols-12 gap-3 text-slate-200 py-10">
      {property.slice(0, pathname === "/" ? 3 : 25).map((item) => (
        <div
          key={item.id}
          className="group col-span-12 md:col-span-6 lg:col-span-4 rounded-xl border-c-3 border-2 overflow-hidden"
        >
          <FeatureItem item={item} />
        </div>
      ))}
    </ul>
  );
};

export default Features;
