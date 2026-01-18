import {
  RiHomeLine,
  RiEarthLine,
  RiMenuLine,
  RiAppsLine,
  RiTimeLine,
} from "@remixicon/react";

export const navigationItems = [
  { name: "Home", href: "/", icon: RiEarthLine, children: [] },
  {
    name: "Discover",
    href: "/",
    icon: RiHomeLine,
    children: [],
  },
  {
    name: "Your Stuff",
    href: "/",
    children: [
      { name: "My Queue", href: "/", icon: RiMenuLine },
      { name: "My Podcasts", href: "/", icon: RiAppsLine },
      { name: "Recents", href: "/", icon: RiTimeLine },
    ],
  },
];
