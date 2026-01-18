import { memo } from "react";
import { TopPodcastsListProps } from "./types";
import TopPodcastItem from "../top-podcast-item/top-podcast-item";

const TopPodcastsList = ({
  podcastsLayout,
  podcasts,
}: TopPodcastsListProps) => {
  if (podcasts?.length === 0) {
    return (
      <div className="flex justify-center items-center mt-16 text-gray-500">
        No podcasts found.
      </div>
    );
  }

  return (
    <>
      {podcastsLayout === "scroll" ? (
        <div
          className="
          gap-3 
          px-6  
          flex  
          overflow-x-auto 
          pb-7
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-[#404080]
          [&::-webkit-scrollbar-thumb]:bg-[#404080]/0
          [&::-webkit-scrollbar-thumb]:rounded-full
          group-hover:[&::-webkit-scrollbar-thumb]:bg-[#404080]
          group-hover:[&::-webkit-scrollbar-thumb:hover]:bg-[#5050a0]
          [scrollbar-color:#404080_#404080]
          "
        >
          {podcasts?.map((item) => {
            return (
              <TopPodcastItem
                item={item}
                podcastsLayout={podcastsLayout}
                key={`${item.collectionId}-${item.trackId}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 px-6">
          {podcasts?.map((item) => {
            return (
              <TopPodcastItem
                item={item}
                podcastsLayout={podcastsLayout}
                key={`${item.collectionId}-${item.trackId}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default memo(TopPodcastsList);
