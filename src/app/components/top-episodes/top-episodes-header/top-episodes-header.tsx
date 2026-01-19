import { memo } from "react";
import { RiMore2Fill } from "@remixicon/react";
import Button from "../../shared/button/button";
import Menu from "../../shared/menu/menu";
import { TopEpisodesHeaderProps } from "./types";

const TopPodcastsHeader = ({
  searchTerm,
  moreBtnClicked,
  isMenuOpen,
  menuOptions,
  menuOptionClick,
  handleCloseMenu,
}: TopEpisodesHeaderProps) => {
  return (
    <>
      <div className="flex justify-between lg:sticky pb-5 border-b border-white-25  top-12 bg-dark-blue-98 z-50 px-5 py-2.5">
        <h2 className=" font-bold-arabic">Top episodes for {searchTerm}</h2>

        <div className="flex items-center">
          <div className="relative inline-block">
            {/* this is the more button (three dots) */}
            <Button
              label="more icon"
              type="button"
              icon={<RiMore2Fill size={24} />}
              iconOnly
              onClick={moreBtnClicked}
            />
            {/* this is the menu options  */}
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
