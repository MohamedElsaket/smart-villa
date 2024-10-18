import { useSelector } from "react-redux";

import SavedCategoryItem from "./SavedCategoryItem";
import EmptyCategories from "../../../pages/EmptyCategories";

const SavedCategories = () => {
  const { savedCategories } = useSelector((state) => state.propertySlice);

  if (!savedCategories.length) return <EmptyCategories />;

  return (
    <div className="flex flex-col gap-5">
      {savedCategories.map((item) => (
        <SavedCategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SavedCategories;
