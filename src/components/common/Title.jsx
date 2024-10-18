const Title = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-c-4 p-3 rounded-full w-fit uppercase text-center text-c-5 hover:bg-c-5 hover:text-slate-50 duration-300`}
    >
      {children}
    </div>
  );
};

export default Title;
