import { memo } from "react";
import { RiMore2Fill } from "@remixicon/react";
import Button from "../../button/button";
import Menu from "../../menu/menu";
import { TopEpisodesHeaderProps } from "./types";

const TopPodcastsHeader = ({
  searchTerm,
  handleButtonClick,
  isMenuOpen,
  menuOptions,
  menuOptionClick,
  handleCloseMenu,
}: TopEpisodesHeaderProps) => {
  return (
    <>
      <div className="flex justify-between sticky pb-5 border-b border-[rgba(255,255,255,0.25)]  top-12 bg-[hsla(234,28%,12%,98%)] z-50">
        <h2 className="text-white">
          {"Top episodes for"} {searchTerm}
        </h2>
        <div className="flex items-center">
          <div className="relative inline-block">
            <Button
              label="more icon"
              type="button"
              icon={<RiMore2Fill size={24} className="text-white " />}
              iconOnly
              onClick={handleButtonClick}
            />
            <Menu
              isOpen={isMenuOpen}
              options={menuOptions}
              onOptionClick={menuOptionClick}
              onClose={handleCloseMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopPodcastsHeader);
