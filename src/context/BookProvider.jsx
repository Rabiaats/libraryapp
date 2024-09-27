import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = "https://www.googleapis.com/books/v1/volumes?q=";

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

// free-ebooks- Yalnızca ücretsiz Google e-Kitap sonuçlarını döndürür.
// paid-ebooks- Sadece fiyatı olan Google e-Kitap sonuçlarını döndürür.
// ebooks

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

const BookProvider = ({ children }) => {
  const [search, setSearch] = useState("harry potter");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [author, setAuthor] = useState("keyes")

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      try {
        const res = await axios(
          `${FEATURED_API}${search}&orderBy=relevance&printType=books&key=${API_KEY}`
        );
        setBooks(res.data.items);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, [search]);

  const values = { books, loading, setSearch };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export default BookProvider;
