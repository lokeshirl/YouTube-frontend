import { useDispatch, useSelector } from "react-redux";

// Import hero Icons
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { toggleMenu } from "../app/feature/appSlice.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { config_urls } from "../conf/config.js";
import { test } from "../utils/constants.js";
import { searchSuggestionsCache } from "../app/feature/searchSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const searchSuggestionCache = useSelector((state) => state.search);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchSuggestionCache.hasOwnProperty(searchInput)) {
      return setSearchSuggestions(searchSuggestionCache[searchInput]);
    }
    const timerId = setTimeout(() => {
      getAutoCompleteData();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);

  const getAutoCompleteData = async () => {
    if (!searchInput) return;

    const autoCompleteResponse = await fetch(
      config_urls.YOUTUBE_SEARCH_AUTOCOMPLETE_URL + searchInput
    );
    let autoCompleteData = await autoCompleteResponse.text();
    autoCompleteData = JSON.parse(
      autoCompleteData.substring(
        autoCompleteData.indexOf("["),
        autoCompleteData.indexOf("])") + 1
      )
    );
    dispatch(
      searchSuggestionsCache({
        [autoCompleteData?.[0]]: autoCompleteData?.[1],
      })
    );
    setSearchSuggestions(autoCompleteData?.[1]);
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
      <div className="relative">
        <div className="hidden md:flex items-center border-2 rounded-md focus-within:border-black">
          <input
            type="search"
            placeholder="Search"
            className="outline-none py-1 px-3 md:w-96"
            value={searchInput}
            onChange={handleSearchInput}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button>
            <MagnifyingGlassIcon className="w-7 h-7" />
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute w-full px-3 py-3 bg-white shadow-md">
            <ul>
              {searchSuggestions?.map((searchSuggestionItem, index) => (
                <li
                  key={index}
                  className="py-2 text-md font-bold flex gap-4 items-center"
                >
                  <MagnifyingGlassIcon className="w-6 h-6" />
                  <span>{searchSuggestionItem?.[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
