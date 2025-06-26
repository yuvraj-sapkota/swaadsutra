const FoodCard = ({ name, price, description, image }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 font-poppins">
          {name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">NRS {price}</span>
          <button className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

// const groupedMenu = menuItems.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = [];
//   }
//   acc[item.category].push(item);
//   return acc;
// }, {});
