import { memo } from "react";
import Image from "next/image";
import { TopEpisodesGridScrollLayoutProps } from "./types";
import { RiMore2Fill } from "@remixicon/react";
import { getRandomBackgroundColor } from "@/app/utils/utils";

const TopEpisodesGridScrollLayout = ({
  item,
}: TopEpisodesGridScrollLayoutProps) => {
  return (
    <>
      <div
        className={`flex-shrink-0 rounded-lg overflow-hidden ${getRandomBackgroundColor()}`}
      >
        <div className="flex">
          <div className="w-[100px] h-[100px] flex-shrink-0">
            <Image
              src={item.artworkUrl160 || "/placeholder.svg"}
              alt="img"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 min-w-0 p-3">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-white text-sm font-medium line-clamp-2 pr-2 flex-1">
                  {item.trackName}
                </h3>
                <RiMore2Fill
                  size={16}
                  className="text-[rgba(255,255,255,0.25)] cursor-pointer flex-shrink-0"
                />
              </div>
              <p className="text-gray-400 text-xs line-clamp-1">
                {item.collectionName}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>
                {item.releaseDate
                  ? new Date(item.releaseDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  : "N/A"}
              </span>
              <span>
                {item.trackTimeMillis
                  ? `${Math.floor(item.trackTimeMillis / 60000)}min`
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopEpisodesGridScrollLayout);
