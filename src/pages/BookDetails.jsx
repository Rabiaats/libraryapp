import { toastErrorNotify } from "../helpers/ToastNotify";
import defaultImage from "../assets/img/default.gif";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useMyListContext } from "../context/MyListProvider";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BOOK_API = "https://www.googleapis.com/books/v1/volumes/";

const BookDetails = () => {
  const { bookID } = useParams();
  const [book, setBook] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleAdd } = useMyListContext();

  useEffect(() => {
    setLoading(true);
    if (bookID) {
      axios
        .get(`${BOOK_API}${bookID}?key=${API_KEY}`)
        .then((res) => setBook(res.data))
        .catch((err) => toastErrorNotify(err.message))
        .finally(setLoading(false));
    }
  }, [bookID]);

  return (
    <div className="flex justify-center p-10 dark:bg-gray-dark-main parallax flex-col align-items-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="book-details shadow-[0_0_10px_0.5px_gray] bg-gray-100 dark:bg-gray-dark-main dark:shadow-[0_0_10px_0.5px_lightgray] rounded-lg">
          <img
            className="rounded-xl"
            loading="lazy"
            src={
              book.volumeInfo?.imageLinks?.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail
                : defaultImage
            }
            alt="book-details-img"
          />
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-1 shadow-sm rounded-lg overflow-x-auto">
              <table className="table-auto text-sm text-left border-collapse">
                <tbody className="text-gray-600 dark:text-gray-100">
                  <tr>
                    <td className="px-6 py-2 whitespace-wrap">
                      Name :{" "}
                      {book.volumeInfo?.title
                        ? book.volumeInfo.title
                        : "İsimsiz Kitap"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 whitespace-wrap">
                      Author :{" "}
                      {book.volumeInfo?.authors?.length
                        ? book.volumeInfo.authors[0]
                        : "Anonim Eser"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-wrap">
                      Publisher :{" "}
                      {book.volumeInfo?.publisher
                        ? book.volumeInfo.publisher
                        : "Bilinmiyor"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-wrap">
                      Published :{" "}
                      {book.volumeInfo?.publishedDate.substring(0, 4)
                        ? book.volumeInfo.publishedDate.substring(0, 4)
                        : "Bilinmiyor"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-wrap">
                      Length :{" "}
                      {book.volumeInfo?.pageCount
                        ? book.volumeInfo.pageCount
                        : "Bilinmiyor"}
                    </td>
                  </tr>
                  {book.volumeInfo?.description ? (
                    <tr>
                      <td className="px-6 py-4 whitespace-wrap">
                        Description :{" "}
                        <div
                          className="mt-5"
                          dangerouslySetInnerHTML={{
                            __html: book.volumeInfo?.description || "",
                          }}
                        />
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center text-center">
        <Link to={-1} className="btn-danger">
          Go Back
        </Link>

        <Link onClick={() => handleAdd(book)} className="btn-danger">
          My List Add
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
