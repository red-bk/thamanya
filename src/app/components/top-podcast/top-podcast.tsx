import { memo, useEffect, useState } from "react";
import { TopPodcastProps, Podcasts } from "./types";

import Loader from "../loader/loader";
import TopPodcastHeader from "./top-podcast-header/top-podcast-header";
import TopPodcastList from "./top-podcast-list/top-podcast-list";

const TopPodcast = ({ searchTerm }: TopPodcastProps) => {
  const [podcasts, setPodcasts] = useState<Podcasts>();
  const [loading, setLoading] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [podcastsLayout, setPodcastsLayout] = useState<"grid" | "scroll">(
    "scroll"
  );

  useEffect(() => {
    async function fetchPodcast() {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append("term", searchTerm);
      try {
        const res = await fetch(`/api/search?${params.toString()}`);
        const data = await res.json();
        setPodcasts(data); 
      } catch (error) {
        console.error("Failed to fetch podcasts", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchPodcast();
  }, [searchTerm]);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptionClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    const target = event.target as HTMLButtonElement;
    switch (target.value) {
      case "1":
        setPodcastsLayout("grid");
        break;
      default:
        setPodcastsLayout("scroll");
        break;
    }

    setIsMenuOpen(false);
  };

  if (loading) {
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
          setIsMenuOpen={setIsMenuOpen}
          handleButtonClick={handleButtonClick}
        />

        <TopPodcastList
          podcastsLayout={podcastsLayout}
          podcasts={podcasts?.results ?? []}
        />
      </div>
    </>
  );
};

export default memo(TopPodcast);
