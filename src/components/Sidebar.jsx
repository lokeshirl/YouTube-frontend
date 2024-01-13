/* eslint-disable react/prop-types */
import {
  FireIcon,
  HomeIcon,
  PlayCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  BookmarkIcon,
  FilmIcon,
  ArrowTrendingUpIcon,
  MusicalNoteIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarNavList = ({ navTitle, navIcon }) => {
  return (
    <div className="flex items-center justify-start gap-2 py-2 px-3 cursor-pointer hover:bg-slate-100 rounded-md">
      {navIcon}
      <span className="text-sm">{navTitle}</span>
    </div>
  );
};

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);

  return (
    <div className={`${isMenuOpen ? "hidden md:block" : "md:hidden"}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <SidebarNavList
                navIcon={<HomeIcon className="w-7 h-7" />}
                navTitle="Home"
              />
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <SidebarNavList
                navIcon={<FireIcon className="w-7 h-7" />}
                navTitle="Explore"
              />
            </Link>
          </li>
          <li>
            <Link to="/subscriptions">
              <SidebarNavList
                navIcon={<PlayCircleIcon className="w-7 h-7" />}
                navTitle="Subscriptions"
              />
            </Link>
          </li>
        </ul>
        <hr className="my-2 border-t border-t-slate-300" />
        <ul>
          <li className="flex items-center justify-start p-2 gap-1">
            <span className="text-md font-bold">You</span>
            <ChevronRightIcon className="w-4 h-4" />
          </li>
          <li>
            <Link to="/history">
              <SidebarNavList
                navIcon={<ClockIcon className="w-7 h-7" />}
                navTitle="History"
              />
            </Link>
          </li>
          <li>
            <Link to="/watch-later">
              <SidebarNavList
                navIcon={<BookmarkIcon className="w-7 h-7" />}
                navTitle="Watch later"
              />
            </Link>
          </li>
          <li>
            <Link to="/playlist">
              <SidebarNavList
                navIcon={<FilmIcon className="w-7 h-7" />}
                navTitle="Playlist"
              />
            </Link>
          </li>
        </ul>
        <hr className="my-2 border-t border-t-slate-300" />
        <ul>
          <li className="flex items-center justify-start p-2 gap-1">
            <span className="text-md font-bold">Explore</span>
            <ChevronRightIcon className="w-4 h-4" />
          </li>
          <li>
            <Link to="/trending">
              <SidebarNavList
                navIcon={<ArrowTrendingUpIcon className="w-7 h-7" />}
                navTitle="Trending"
              />
            </Link>
          </li>
          <li>
            <Link to="/music">
              <SidebarNavList
                navIcon={<MusicalNoteIcon className="w-7 h-7" />}
                navTitle="Music"
              />
            </Link>
          </li>
          <li>
            <Link to="/live">
              <SidebarNavList
                navIcon={<SignalIcon className="w-7 h-7" />}
                navTitle="Live"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
