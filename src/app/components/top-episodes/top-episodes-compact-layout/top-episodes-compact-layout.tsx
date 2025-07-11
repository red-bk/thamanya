import { memo } from "react";
import Image from "next/image";
import { TopEpisodesCompactLayoutProps } from "./types";
import { RiMore2Fill } from "@remixicon/react";

const TopEpisodesCompactLayout = ({ item }: TopEpisodesCompactLayoutProps) => {
  return (
    <>
      <div
        className="flex justify-between border-b border-[rgba(255,255,255,0.25)] pb-2"
        key={item.trackId}
      >
        <div className="flex gap-3">
          <Image src={item.artworkUrl60} alt="img" width={60} height={60} />

          <div className="flex flex-col">
            <span className="text-white">{item.collectionName}</span>

            <span className="text-white">{item.trackName}</span>
          </div>
        </div>

        <RiMore2Fill size={24} className="text-[rgba(255,255,255,0.25)] " />
      </div>
    </>
  );
};

export default memo(TopEpisodesCompactLayout);
