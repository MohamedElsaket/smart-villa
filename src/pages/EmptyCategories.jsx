import { useNavigate } from "react-router-dom";

const EmptyCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="text-slate-50 h-dvh text-center rounded-xl pt-20">
      <p className="text-2xl pb-3">There's No Property Saved Yet.</p>
      <p
        className="underline decoration-1 cursor-pointer hover:text-c-5"
        onClick={() => navigate(-1)}
      >
        &larr; Go back to Properties
      </p>
    </div>
  );
};

export default EmptyCategories;
