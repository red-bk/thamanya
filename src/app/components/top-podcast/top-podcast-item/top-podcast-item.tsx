import { RiMore2Fill } from "@remixicon/react";
import Button from "../../shared/button/button";
import { getRandomColor } from "@/app/utils/utils";
import { TopPodcastsItemProps } from "./types";
import Image from "next/image";
import { memo } from "react";

const TopPodcastItem = ({ item, podcastsLayout }: TopPodcastsItemProps) => {
  return (
    <div
      className="flex flex-col gap-3"
      key={`${item.collectionId}-${item.trackId}`}
    >
      <div
        className={`
          h-[12.5rem] 
          ${podcastsLayout === "scroll" && `w-[12.5rem] `}
              `}
      >
        <Image
          src={item.artworkUrl100}
          alt="img"
          width={400}
          height={400}
          className="h-full w-full rounded-[3px]"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <p className=" line-clamp-1 text-[0.875rem] font-bold-arabic">
            {item.trackName}
          </p>
          <span className={`${getRandomColor()} text-xs`}>
            {item.artistName}
          </span>
        </div>

        <div className="relative inline-block">
          <Button
            label="more icon"
            type="button"
            icon={<RiMore2Fill size={24} className="text-white-25" />}
            iconOnly
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TopPodcastItem);
