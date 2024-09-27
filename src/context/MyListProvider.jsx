import { createContext, useContext, useState } from "react";
import { toastWarnNotify } from "../helpers/ToastNotify";

const MyListContext = createContext();

export const useMyListContext = () => {
  return useContext(MyListContext);
};

const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem("myList")) || []
  );
  const handleAdd = (addBook) => {
    if (!myList.some((book) => book.id === addBook.id)) {
      setMyList([...myList, addBook]);
      localStorage.setItem("myList", JSON.stringify([...myList, addBook]));
    } else {
      toastWarnNotify("Bu kitap kütüphanenizde var!");
    }
  };

  const handleDelete = (deleteBook) => {
    setMyList(myList.filter((book) => book !== deleteBook));
    localStorage.setItem(
      "myList",
      JSON.stringify(myList.filter((book) => book !== deleteBook))
    );
  };

  const values = { myList, setMyList, handleDelete, handleAdd };

  return (
    <MyListContext.Provider value={values}>{children}</MyListContext.Provider>
  );
};

export default MyListProvider;
