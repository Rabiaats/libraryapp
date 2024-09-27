import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import avatar from "../assets/icons/avatar.png";
import { useAuthContext } from "../context/AuthProvider";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  const { logOut, currentUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <Disclosure
        as="nav"
        className="text-gary-900 bg-neutral-100 dark:bg-gray-900 dark:text-white sticky top-0 w-full z-20"
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link className="pr-2 text-2xl font-semibold" to="/">
            Colorful Library
            </Link>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {currentUser && (
                <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
              )}
              <SwitchButton />
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={currentUser?.photoURL || avatar}
                      className="h-8 w-8 rounded-full p-0"
                      referrerPolicy="no-referrer"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-white"
                >
                  {!currentUser ? (
                    <>
                      <MenuItem>
                        <Link
                          to="/register"
                          className="text-white data-[focus]:bg-white data-[focus]:text-gray-900 block px-4 py-2 text-sm dark:text-black dark:data-[focus]:bg-gray-dark-main dark:data-[focus]:text-white cursor-pointer"
                        >
                          Register
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/login"
                          className="text-white data-[focus]:bg-white data-[focus]:text-gray-900 block px-4 py-2 text-sm dark:text-black dark:data-[focus]:bg-gray-dark-main dark:data-[focus]:text-white cursor-pointer"
                        >
                          Login
                        </Link>
                      </MenuItem>
                    </>
                  ) :
                  <>
                  
                    <MenuItem>
                      <span
                        onClick={() => navigate("/myList")}
                        className="text-white data-[focus]:bg-white data-[focus]:text-gray-900 block px-4 py-2 text-sm dark:text-black dark:data-[focus]:bg-gray-dark-main dark:data-[focus]:text-white cursor-pointer"
                      >
                        My Library
                      </span>
                    </MenuItem>
                    <MenuItem>
                      <span
                        onClick={logOut}
                        className="text-white data-[focus]:bg-white data-[focus]:text-gray-900 block px-4 py-2 text-sm dark:text-black dark:data-[focus]:bg-gray-dark-main dark:data-[focus]:text-white cursor-pointer"
                      >
                        Log out
                      </span>
                      
                      
                    </MenuItem>
                  
                  </>
                  }
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
