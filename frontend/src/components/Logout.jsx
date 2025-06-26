const Logout = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-2xl">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="font-poppins font-bold text-sm  md:text-xl text-black mb-6">
          Are you sure you want to log out?
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="font-poppins font-semibold text-sm md:text-lg text-white bg-[#2e8b57] px-6 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Log out
          </button>
          <button
            onClick={onCancel}
            className="font-poppins font-semibold text-sm md:text-lg text-[#2e8b57] border border-[#2e8b57] px-6 py-2 rounded-xl hover:bg-[#2e8b57] hover:text-white transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
