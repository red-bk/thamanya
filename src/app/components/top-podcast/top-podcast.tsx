import { memo, useEffect, useState } from "react";
import { TopPodcastProps, Podcasts } from "./types";

import Loader from "../loader/loader";
import TopPodcastHeader from "./top-podcast-header/top-podcast-header";
import TopPodcastList from "./top-podcast-list/top-podcast-list";

const TopPodcast = ({ searchTerm }: TopPodcastProps) => {
  const [podcasts, setPodcasts] = useState<Podcasts>();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [podcastsLayout, setPodcastsLayout] = useState<"grid" | "scroll">(
    "scroll"
  );

  useEffect(() => {
    async function fetchPodcast() {
      const params = new URLSearchParams();
      if (searchTerm) params.append("term", searchTerm);
      const res = await fetch(`/api/search?${params.toString()}`);
      const data = await res.json();
      setPodcasts(data);
    }

    fetchPodcast();
  }, [searchTerm]);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptionClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    switch (event.target.value) {
      case "1":
        setPodcastsLayout("grid");
        break;
      default:
        setPodcastsLayout("scroll");
        break;
    }

    setIsMenuOpen(false);
  };

  if (!podcasts?.results?.length) {
    return (
      <div className="flex justify-center items-center mt-16">
        <Loader />;
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5 mt-16">
        <TopPodcastHeader
          searchTerm={searchTerm}
          podcastsLayout={podcastsLayout}
          menuOptionClick={menuOptionClick}
          isMenuOpen={isMenuOpen}
          handleButtonClick={handleButtonClick}
        />

        <TopPodcastList
          podcastsLayout={podcastsLayout}
          podcasts={podcasts?.results}
        />
      </div>
    </>
  );
};

export default memo(TopPodcast);
