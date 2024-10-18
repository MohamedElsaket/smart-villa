const Button = ({ children, className, onClick }) => {
  const classes =
    "bg-c-5 text-white rounded-lg uppercase w-fit h-fit hover:opacity-90 duration-300";
  return (
    <button
      onClick={onClick}
      className={`${classes} ${!className ? `py-3 px-5` : className}`}
    >
      {children}
    </button>
  );
};

export default Button;
