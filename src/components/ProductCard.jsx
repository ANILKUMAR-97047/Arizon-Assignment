import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
      <h3 className="font-semibold text-sm line-clamp-2 mb-2">{product.title}</h3>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
