import { memo } from "react";
import { searchProps } from "./types";

const Search = ({ placeHolder, searchText, setSearchText }: searchProps) => {
  return (
    <>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        name="search"
        value={searchText}
        placeholder={placeHolder}
        type="text"
        className={`
     border 
    border-[rgba(255,255,255,0.25)]
    rounded-[10px]
    flex-1
    text-white
    placeholder-[rgba(255,255,255,0.25)]
    `}
      />
    </>
  );
};

export default memo(Search);
