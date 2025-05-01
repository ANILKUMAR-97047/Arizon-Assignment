// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import MiniCart from "./MiniCart";
// import { useState } from "react";

// const Header = () => {
//   const { cart } = useCart();
//   const [showMiniCart, setShowMiniCart] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold">
//           🛍️ ShopEasy
//         </Link>
//         <nav className="flex items-center space-x-4">
//           <Link to="/" className="hover:text-blue-500">Home</Link>
//           <Link to="/products" className="hover:text-blue-500">Products</Link>
//           <button onClick={() => setShowMiniCart(!showMiniCart)} className="relative">
//             🛒
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
//               {cart.length}
//             </span>
//           </button>
//           {showMiniCart && <MiniCart />}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import MiniCart from "./MiniCart";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // import theme context

const Header = () => {
  const { cart } = useCart();
  const [showMiniCart, setShowMiniCart] = useState(false);
  const { theme, toggleTheme } = useTheme(); // use theme

  return (
    <header style={{backgroundColor:"lightgreen"}} className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          🛍️ ShopEasy
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link to="/products" className="hover:text-blue-500 dark:hover:text-blue-400">Products</Link>

          <button onClick={() => setShowMiniCart(!showMiniCart)} className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {cart.length}
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="ml-2 px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>

          {showMiniCart && <MiniCart />}
        </nav>
      </div>
    </header>
    
  );
};

export default Header;
