import React from "react";
import { useBookContext } from "../context/BookProvider";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import debounce from "../helpers/methods";

const Home = () => {
  const { books, loading, setSearch } = useBookContext();

  const handleSearch = React.useCallback(
    debounce((e) => setSearch(e.target.value), 1000),
    []
  );

  return (
    <div className="dark:bg-gray-dark-main parallax">
      <form className="flex justify-center flex-wrap p-2 mt-10">
        <input
          type="search"
          className="w-80 rounded-full border-2 p-3 m-2 border-gray-600 dark:border-gray-100"
          placeholder="Search a book"
          onChange={handleSearch}
        />
      </form>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Loading />
        ) : (
          books?.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default Home;
