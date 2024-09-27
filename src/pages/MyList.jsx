import React from "react";
import { MdDelete } from "react-icons/md";
import { useMyListContext } from "../context/MyListProvider";
import listeBos from "../assets/img/liste-bos.png";
import { Link } from "react-router-dom";

const MyList = () => {
  const { myList, handleDelete } = useMyListContext();

  return (
    <div className="dark:bg-gray-dark-library parallax pt-10 text-gray-900 dark:text-gray-200 text-center">
      {myList.length ? (
        <div class="relative overflow-x-auto sm:rounded-lg">
          <table class="shadow-[0_0_15px_1px_black] dark:shadow-[0_0_10px_1px_gray] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
            <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-50 dark:text-black">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Book
                </th>
                <th scope="col" class="px-6 py-3">
                  Author
                </th>
                <th scope="col" class="px-6 py-3">
                  Publisher
                </th>
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            {myList.map((book) => (
              <tbody>
                <tr class="bg-gray-900 text-gray-100 border-b dark:bg-gray-400 dark:border-gray-700 dark:text-gray-950 hover:bg-gray-600 dark:hover:bg-gray-300">
                  <th
                    scope="row"
                    class="px-4 py-4 text-white whitespace-nowrap dark:text-black font-semibold"
                  >
                    {book.volumeInfo?.title
                      ? book.volumeInfo.title
                      : "İsimsiz Kitap"}
                  </th>
                  <td class="px-6 py-4">
                    {book.volumeInfo?.authors?.length
                      ? book.volumeInfo.authors[0]
                      : "Anonim Eser"}
                  </td>
                  <td class="px-6 py-4">
                    {book.volumeInfo?.publishedDate
                      ? book.volumeInfo.publishedDate.substring(0, 4)
                      : "Bilinmiyor"}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <MdDelete
                      className="m-auto cursor-pointer dark:text-gray-900"
                      onClick={() => handleDelete(book)}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div>
          <img
            width="400px"
            src={listeBos}
            alt=""
            className="m-auto mb-3 kitaplikImage"
          />
          <p className="text-lg">
            Kitaplığın boş. Kitap eklemek istersen detay sayfasına bakabilirsin.{" "}
          </p>
          <p className="font-semibold mb-10">
            Detay sayfasına kitaplara tıklayarak gidebilirsin.
          </p>
          <Link to="/" className="btn-danger">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyList;
