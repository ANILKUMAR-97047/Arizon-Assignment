const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <input
      style={{border:"2px solid black"}}
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 rounded w-full md:w-1/3"
      />
    );
  };
  
  export default SearchBar;
  