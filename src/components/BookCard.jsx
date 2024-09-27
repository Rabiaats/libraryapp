import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/img/default.gif";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div
      className="book-card shadow-[0_0_10px_0.5px_gray] bg-gray-100 dark:bg-gray-dark-main dark:shadow-[0_0_10px_0.5px_lightgray] rounded-lg hover:scale-110"
      onClick={() => navigate(`/details/${book.id}`)}
    >
      <img
        className="rounded-xl"
        loading="lazy"
        src={
          book.volumeInfo?.imageLinks?.thumbnail
            ? book.volumeInfo.imageLinks.thumbnail
            : defaultImage
        }
        alt="book-card-img"
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-1 rounded-lg overflow-x-auto">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
