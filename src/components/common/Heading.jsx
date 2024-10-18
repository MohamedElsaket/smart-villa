const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-slate-300 text-xl md:text-3xl font-bold pt-5 text-center capitalize`}
    >
      {children}
    </h2>
  );
};

export default Heading;
