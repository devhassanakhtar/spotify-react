const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group flex items-center justify-center">
      {children}

      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap rounded-md bg-[#282828] px-3 py-1 text-xs font-semibold text-white opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:delay-[300ms] z-[99999]">
        {text}
      </span>
    </div>
  );
};

export default Tooltip