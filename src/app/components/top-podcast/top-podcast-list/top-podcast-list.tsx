import { memo } from "react";
import { RiMore2Fill } from "@remixicon/react";
import Button from "../../button/button";
import { TopPodcastsListProps } from "./types";
import Image from "next/image";

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
    <div
      className={`border-t border-[rgba(255,255,255,0.25)] ${
        podcastsLayout === "scroll"
          ? "flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          : "grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3"
      }`}
    >
      {podcasts?.map((item) => {
        return (
          <div
            className="flex flex-col gap-3"
            key={`${item.collectionId}-${item.trackId}`}
          >
            <div
              className={`
          
          h-[200px] 
          ${podcastsLayout === "scroll" && `w-[200px] `}
              `}
            >
              <Image
                src={item.artworkUrl100}
                alt="img"
                width={400}
                height={400}
                className="h-full w-full"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <p className="text-white line-clamp-1 ">{item.trackName}</p>
                <p className="text-white">{item.artistName}</p>
              </div>

              <div className="relative inline-block">
                <Button
                  label="more icon"
                  type="button"
                  icon={
                    <RiMore2Fill
                      size={24}
                      className="text-[rgba(255,255,255,0.25)] "
                    />
                  }
                  iconOnly
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(TopPodcastsList);
