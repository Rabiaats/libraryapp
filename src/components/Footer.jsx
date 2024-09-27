import { IoLibrarySharp } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Privacy Policy",
    path: "/privacyPolicy",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-white shadow dark:bg-gray-900 text-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
        <hr className="my-2 border-gray-700 sm:mx-auto dark:border-gray-300 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-1 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <IoLibrarySharp
              className="text-gray-900 dark:text-white"
              size={"30px"}
            />
            <span className="text-gray-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-300">
              Library
            </span>
          </Link>
          <ul className="text-red-main flex flex-wrap items-center mb-6 text-sm font-medium dark:text-gray-400 sm:mb-0">
            {navigation.map((item) => (
              <li className="font-medium flex justify-center" key={item.title}>
                <NavLink
                  className={`text-gray-700 block hover:bg-main rounded-full py-2 px-4 dark:text-gray-300 ${location.pathname === item.path ? "text-black dark:text-white scale-125 underline " : ""}`}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-2 border-gray-700 sm:mx-auto dark:border-gray-300 lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-300">
          © 2024{" "}
          <Link
            to="/"
            className="hover:underline text-gray-700 dark:text-gray-300"
          >
            ColorfulLibrary™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
