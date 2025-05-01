import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

const handleCheckout = () => {
  dispatch({ type: "CHECKOUT" });
  alert("Thank you for your purchase!");
  navigate("/"); // or "/thank-you" if you have a thank you page
};

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const subtotal = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);


  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p  className="text-center text-lg text-gray-700 py-20">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    className="h-24 w-24 object-contain"
                    alt={item.title}
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      Price: ${item.price}
                    </p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded text-xs"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 self-end md:self-center"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <p className="text-lg font-semibold">Subtotal: ${subtotal}</p>
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
