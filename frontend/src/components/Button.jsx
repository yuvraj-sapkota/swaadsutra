const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-[#2e8b57] hover:bg-[#4b894d]  w-full text-center font-poppins text-white font-semibold px-4 py-2 rounded transition"
    >
      {children}
    </button>
  );
};

export default Button;
