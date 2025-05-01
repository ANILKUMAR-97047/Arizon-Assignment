import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const MiniCart = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="absolute top-12 right-4 bg-white shadow-lg p-4 w-64 rounded border z-50">
      <h3 className="font-bold mb-2">Cart Summary</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center text-sm">
              <img src={item.image} className="h-10 w-10 object-contain" />
              <span className="line-clamp-1 ml-2">{item.title}</span>
              <span>x{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="font-semibold">Subtotal: ${subtotal}</p>
      <div className="flex justify-between mt-3">
        <Link to="/cart" className="text-blue-600 hover:underline text-sm">
          View Cart
        </Link>
        <button disabled className="text-gray-400 text-sm" title="Checkout coming soon">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
