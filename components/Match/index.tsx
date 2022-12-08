import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

import { classNames } from "../../utils";

type TTeam = {
  id: string;
  name: string;
};

type TMatch = {
  id: number;
  teams: TTeam[];
};

const Match = ({ match }: { match: TMatch }) => {
  return (
    <li
      key={match.id}
      className="text-aqua rounded-lg bg-purple px-4 py-6 shadow sm:p-6"
    >
      Match
    </li>
  );
};

export default Match;
