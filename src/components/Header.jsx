import { useDispatch } from "react-redux";

// Import hero Icons
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { toggleMenu } from "../app/feature/appSlice.js";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="px-3 py-3 w-full flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div onClick={handleToggleMenu} className="cursor-pointer">
          <Bars3Icon className="h-7 w-7" />
        </div>
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
            className="h-5"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center border-2 rounded-md focus-within:border-black">
        <input
          type="search"
          placeholder="Search"
          className="outline-none py-1 px-3 md:w-96"
        />
        <button>
          <MagnifyingGlassIcon className="w-7 h-7" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <MagnifyingGlassIcon className="w-7 h-7 block md:hidden" />
        </button>
        <button className="relative">
          <BellIcon className="w-7 h-7" />
          <span className="absolute px-1 bg-red-600 rounded-full text-white text-xs top-0">
            2
          </span>
        </button>
        <button>
          <UserCircleIcon className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
