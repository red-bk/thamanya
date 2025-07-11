import { memo, useEffect, useMemo, useState } from "react";
import { TopEpisodesProps } from "./types";
import { RiMore2Fill } from "@remixicon/react";
import Menu from "../menu/menu";
import Button from "../button/button";
import Loader from "../loader/loader";
import TopEpisodesGridScrollLayout from "./top-episodes-grid-scroll-layout/top-episodes-grid-scroll-layout.tsx";
import TopEpisodesCompactLayout from "./top-episodes-compact-layout/top-episodes-compact-layout";

const TopEpisodes = ({ searchTerm }: TopEpisodesProps) => {
  const [episodes, setEpisodes] = useState<any>();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [episodesLayout, setEpisodesLayout] = useState<
    "compact" | "grid" | "scroll"
  >("compact");

  useEffect(() => {
    async function fetchEpisodes() {
      const params = new URLSearchParams();

      if (searchTerm) params.append("term", searchTerm);
      params.append("media", "all");
      params.append("entity", "podcastEpisode");
      params.append("limit", "15");

      const res = await fetch(`/api/search?${params.toString()}`);
      const data = await res.json();

      setEpisodes(data);
    }

    fetchEpisodes();
  }, [searchTerm]);

  const moreBtnOptions = useMemo(() => {
    const options = [
      { label: "Switch layout to Scroll", value: 1 },
      { label: "Switch layout to Grid", value: 2 },
    ];

    if (episodesLayout !== "compact") {
      options.push({ label: "Switch layout to Compact", value: 3 });
    }

    return options;
  }, [episodesLayout]);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptionClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    switch (event.target.value) {
      case "1":
        setEpisodesLayout("scroll");
        break;
      case "2":
        setEpisodesLayout("grid");
        break;
      default:
        setEpisodesLayout("compact");
        break;
    }

    setIsMenuOpen(false);
  };

  const topEpisodesLayout = (item) => {
    switch (episodesLayout) {
      case "scroll":
      case "grid":
        return <TopEpisodesGridScrollLayout item={item} key={item.trackId} />;

      default:
        return <TopEpisodesCompactLayout item={item} key={item.trackId} />;
    }
  };

  if (!episodes?.results?.length) {
    return (
      <div className="flex justify-center items-center">
        <Loader />;
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
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
                onClose={(e) => menuOptionClick(e)}
                options={moreBtnOptions}
              />
            </div>
          </div>
        </div>

        <div
          className={`
        gap-3 
        pt-5 
        border-t 
        text-[rgba(255,255,255,0.25)]
        ${episodesLayout == "scroll" && `flex  overflow-x-auto  `}
        ${
          episodesLayout == "compact" && `    grid md:grid-cols-3   grid-cols-1`
        }
        ${
          episodesLayout == "grid" &&
          `     
          grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1`
        }
    `}
        >
          {episodes?.results?.map((item) => {
            return topEpisodesLayout(item);
          })}
        </div>
      </div>
    </>
  );
};

export default memo(TopEpisodes);
