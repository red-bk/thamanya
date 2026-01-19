import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "@remixicon/react";
import { memo } from "react";
import Button from "../../shared/button/button";
import GlobalSearch from "../../global-search/global-search";
import { HeaderProps } from "./type";
import AppIcon from "../../shared/app-global-icon/app-global-icon";

const Header = ({ searchTerm, setSearchText }: HeaderProps) => {
  return (
    <header className="flex flex-row  items-center gap-3 sticky top-0 bg-dark-blue-98 z-50 sm:px-2.5 md:py-0 px-3.5 py-2.5">
      <div className="lg:hidden block">
        <AppIcon />
      </div>

      <div className="md:flex hidden">
        <div className="px-[5px] py-3.5 md:block hidden">
          <RiArrowLeftSLine size={24} className="text-white/50" />
        </div>

        <div className="px-[5px] py-3.5 md:block hidden">
          <RiArrowRightSLine size={24} className="text-white/50" />
        </div>
      </div>

      <GlobalSearch
        searchText={searchTerm}
        setSearchText={setSearchText}
        placeHolder="Search through over 70 million podcasts and episodes..."
      />

      <div className="md:flex hidden gap-1.5">
        <Button
          label="Log in"
          type="button"
          classes="lg:block hidden hover:brightness-[1.25] transition duration-200 text-[0.8125rem]"
        />
        <Button
          label="Sign Up"
          type="button"
          classes="lg:block hidden hover:brightness-[1.25] transition duration-200 text-[0.8125rem]"
        />
      </div>

      <div className="px-[5px] py-3.5 ">
        <RiMore2Fill size={22} />
      </div>
    </header>
  );
};

export default memo(Header);
