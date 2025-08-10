import { memo, useMemo } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "@remixicon/react";
import Button from "../../button/button";
import Menu from "../../menu/menu";
import { TopPodcastsHeaderProps } from "./types";

const TopPodcastsHeader = ({
  searchTerm,
  podcastsLayout,
  menuOptionClick,
  isMenuOpen,
  handleButtonClick,
  setIsMenuOpen
}: TopPodcastsHeaderProps) => {
  const moreBtnOptions = useMemo(() => {
    const options = [];

    if (podcastsLayout == "scroll") {
      options.push({ label: "Switch layout to Grid", value: 1 });
    }
    if (podcastsLayout == "grid") {
      options.push({ label: "Switch layout to Scroll", value: 2 });
    }

    return options;
  }, [podcastsLayout]);

  const handleCloseMenu = () => setIsMenuOpen(false);
  
  return (
    <>
      <div className="flex justify-between pb-5 border-b border-[rgba(255,255,255,0.25)]">
        <h2 className="text-white">
          {"Top podcasts for"} {searchTerm}
        </h2>
        <div className="flex items-center">
          <Button
            label="more icon"
            type="button"
            icon={
              <RiArrowLeftSLine size={24} className="text-white opacity-50 " />
            }
            iconOnly
          />

          <Button
            label="more icon"
            type="button"
            icon={
              <RiArrowRightSLine size={24} className="text-white opacity-50 " />
            }
            iconOnly
          />

          <div className="relative inline-block">
            <Button
              label="more icon"
              type="button"
              icon={<RiMore2Fill size={24} className="text-white " />}
              iconOnly
              onClick={handleButtonClick}
            />
            <Menu
              onOptionClick={menuOptionClick}
              isOpen={isMenuOpen}
              options={moreBtnOptions}
              onClose={handleCloseMenu}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopPodcastsHeader);
