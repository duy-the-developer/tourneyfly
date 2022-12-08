import React, { Dispatch, SetStateAction } from "react";
import SecondaryNav from "./SecondaryNav";
import PrimaryNav from "./PrimaryNav";
import { TMainNav, TSubNav } from "../../../types/TNavigation";

type TProps = {
  navOptions: {
    main: TMainNav;
    sub: TSubNav;
  };
};

const Sidebar = ({ navOptions }: TProps) => {
  return (
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <PrimaryNav navigation={navOptions.main} />
      <SecondaryNav navigation={navOptions.sub} />
    </nav>
  );
};

export default Sidebar;
