import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from './SearchBar';
import { LineWave } from "react-loader-spinner";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error("Failed to load products", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="container mx-auto px-4 py-10 dark:bg-gray-900 dark:text-white min-h-screen">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="text-2xl font-semibold mb-6 text-center">All Products</h2>
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductListing;
