import { TrophyIcon, BoltIcon } from "@heroicons/react/24/outline";
import { PageLayout } from "../common";

import type { ReactNode } from "react";

const defaultNavOptions = {
  main: [
    { name: "Tournaments", href: "/", pathname: "/", icon: TrophyIcon },
    {
      name: "Quick Match",
      href: "/quick-match",
      pathname: "/quick-match",
      icon: BoltIcon,
    },
  ],
  sub: [
    { name: "Twitch", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Tiktok", href: "#" },
    { name: "Discord", href: "#" },
  ],
};

export const Custom404Layout = ({ children }: { children: ReactNode }) => {
  return <PageLayout navOptions={defaultNavOptions}>{children}</PageLayout>;
};
