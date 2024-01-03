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

const SidebarNavList = ({ navTitle, navIcon }) => {
  return (
    <li>
      <div className="flex items-center justify-start gap-2 py-2 px-3 cursor-pointer hover:bg-slate-100 rounded-md">
        {navIcon}
        <span className="text-sm">{navTitle}</span>
      </div>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="w-40">
      <nav>
        <ul>
          <SidebarNavList
            navIcon={<HomeIcon className="w-7 h-7" />}
            navTitle="Home"
          />
          <SidebarNavList
            navIcon={<FireIcon className="w-7 h-7" />}
            navTitle="Explore"
          />
          <SidebarNavList
            navIcon={<PlayCircleIcon className="w-7 h-7" />}
            navTitle="Subscriptions"
          />
        </ul>
        <hr className="my-2 border-t border-t-slate-300" />
        <ul>
          <li className="flex items-center justify-start p-2 gap-1">
            <span className="text-md font-bold">You</span>
            <ChevronRightIcon className="w-4 h-4" />
          </li>
          <SidebarNavList
            navIcon={<ClockIcon className="w-7 h-7" />}
            navTitle="History"
          />
          <SidebarNavList
            navIcon={<BookmarkIcon className="w-7 h-7" />}
            navTitle="Watch later"
          />
          <SidebarNavList
            navIcon={<FilmIcon className="w-7 h-7" />}
            navTitle="Playlist"
          />
        </ul>
        <hr className="my-2 border-t border-t-slate-300" />
        <ul>
          <li className="flex items-center justify-start p-2 gap-1">
            <span className="text-md font-bold">Explore</span>
            <ChevronRightIcon className="w-4 h-4" />
          </li>
          <SidebarNavList
            navIcon={<ArrowTrendingUpIcon className="w-7 h-7" />}
            navTitle="Trending"
          />
          <SidebarNavList
            navIcon={<MusicalNoteIcon className="w-7 h-7" />}
            navTitle="Music"
          />
          <SidebarNavList
            navIcon={<SignalIcon className="w-7 h-7" />}
            navTitle="Live"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
