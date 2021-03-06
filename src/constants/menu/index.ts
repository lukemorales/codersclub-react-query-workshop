import {
  HiHome,
  HiShieldCheck,
  HiUserGroup,
  HiOutlineTicket,
  HiUserCircle,
  HiClock,
  HiStar,
  HiFolderDownload,
  HiTicket,
  HiVideoCamera,
  HiCube,
  HiLogout,
  HiCog,
} from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

type MenuSections = 'Menu' | 'Library' | 'Category' | 'General';

export type ItemTitles =
  | 'Home'
  | 'Community'
  | 'Discover'
  | 'Awards'
  | 'Celebs'
  | 'Recent'
  | 'Top Rated'
  | 'Downloaded'
  | 'TV - Show'
  | 'Movie'
  | 'Anime'
  | 'Settings'
  | 'Log Out';

type MenuEntries = Array<{
  section: MenuSections;
  items: Array<{
    title: ItemTitles;
    icon: IconType;
    pathname?: string;
    pathRegex?: RegExp;
  }>;
}>;

export const MENU_ENTRIES: MenuEntries = [
  {
    section: 'Menu',
    items: [
      {
        title: 'Home',
        icon: HiHome,
        pathname: '/',
        pathRegex: /^\/$/,
      },
      {
        title: 'Community',
        icon: HiShieldCheck,
      },
      {
        title: 'Discover',
        icon: HiUserGroup,
      },
      {
        title: 'Awards',
        icon: HiOutlineTicket,
      },
      {
        title: 'Celebs',
        icon: HiUserCircle,
      },
    ],
  },
  {
    section: 'Library',
    items: [
      {
        title: 'Recent',
        icon: HiClock,
      },
      {
        title: 'Top Rated',
        icon: HiStar,
      },
      {
        title: 'Downloaded',
        icon: HiFolderDownload,
      },
    ],
  },
  {
    section: 'Category',
    items: [
      {
        title: 'TV - Show',
        icon: HiTicket,
        pathRegex: /favorite/,
      },
      {
        title: 'Movie',
        icon: HiVideoCamera,
        pathRegex: /movie/,
      },
      {
        title: 'Anime',
        icon: HiCube,
        pathRegex: /\/anime?/,
      },
    ],
  },
  {
    section: 'General',
    items: [
      {
        title: 'Settings',
        icon: HiCog,
      },
      {
        title: 'Log Out',
        icon: HiLogout,
      },
    ],
  },
];
