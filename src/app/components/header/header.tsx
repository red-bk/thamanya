import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "@remixicon/react";
import { memo } from "react";
import Button from "../button/button";
import Search from "../search/search";
import { HeaderProps } from "./type";

const Header = ({ searchTerm, setSearchText }: HeaderProps) => {
  return (
    <header className="flex flex-row  items-center gap-3">
      <div className="px-[5px] py-3.5">
        <RiArrowLeftSLine size={24} className="text-white opacity-50 " />
      </div>

      <div className="px-[5px] py-3.5">
        <RiArrowRightSLine size={24} className="text-white opacity-50 " />
      </div>

      <Search
        searchText={searchTerm}
        setSearchText={setSearchText}
        placeHolder="Search through over 70 million podcasts and episodes..."
      />

      <Button label="Log in" type="button" />
      <Button label="Sign Up" type="button" />
      <div className="px-[5px] py-3.5 ">
        <RiMore2Fill size={24} className="text-white  " />
      </div>
    </header>
  );
};

export default memo(Header);
